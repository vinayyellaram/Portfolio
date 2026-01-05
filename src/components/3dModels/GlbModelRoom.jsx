import React, { Suspense, useMemo, useRef } from "react";
import { CameraControls, PerspectiveCamera, Float, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EmptyRoom } from "./EmptyRoom";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Plane } from "./Plane";
import { OrbitingPlaneWithVoxelTrail } from "./OrbitingPlaneWithVoxelTrail";

const LIGHTS = {
    ambient: { intensity: 0.6, color: "#ffffff" },
    key: { position: [5, 8, 5], intensity: 1.2, color: "#fff7e6" },
    fill: { position: [-5, 2, -3], intensity: 0.5, color: "#88ccff" },
    point: { position: [0, 2, 0], intensity: 0.7, distance: 8, color: "#ffffff" },
};

// ✈️ Orbiting plane with natural tilt + visible trail
function OrbitingPlane() {
    const planeRef = useRef();
    const radius = 3.5;
    const speed = 0.5;
    const height = 2.3;

    useFrame((state) => {
        const time = state.clock.getElapsedTime() * speed;
        const x = Math.sin(time) * radius;
        const z = Math.cos(time) * radius;
        const y = height + Math.sin(time * 2) * 0.2; // gentle vertical wobble

        if (planeRef.current) {
            // Move in circle
            planeRef.current.position.set(x, y, z);

            // Face direction of travel with smooth banking
            planeRef.current.rotation.y = time + Math.PI; // face forward
            planeRef.current.rotation.z = Math.sin(time * 1.5) * 0.3; // side tilt (banking)
            planeRef.current.rotation.x = Math.cos(time * 1.2) * 0.1; // nose up/down
        }
    });

    return (
        <Trail
            width={0.18}
            color="white"
            length={10}
            decay={1}
            local={true}
            attenuation={(t) => t * t}
        >
            <group ref={planeRef}>
                <Plane rotation={[0, Math.PI, 0]} scale={0.3} />
            </group>
        </Trail>
    );
}

export default function GlbModelRoom() {
    const bloomConfig = useMemo(
        () => ({
            intensity: 1.2,
            luminanceThreshold: 0.25,
            luminanceSmoothing: 0.9,
            blendFunction: BlendFunction.SCREEN,
        }),
        []
    );

    return (
        <>
            {/* === 💡 LIGHTING === */}
            <ambientLight {...LIGHTS.ambient} />
            <directionalLight castShadow {...LIGHTS.key} />
            <directionalLight {...LIGHTS.fill} />
            <pointLight {...LIGHTS.point} />

            {/* === 🎥 CAMERA === */}
            <PerspectiveCamera makeDefault fov={60} position={[0, 1.2, 4]} />

            {/* === ✨ POST-PROCESSING === */}
            <EffectComposer>
                <Bloom {...bloomConfig} />
            </EffectComposer>

            {/* === 🏠 MAIN SCENE === */}
            <Suspense fallback={null}>
                <Float
                    speed={0.4}
                    rotationIntensity={0.8}
                    floatIntensity={0.15}
                    floatingRange={[0.02, 0.08]}
                >
                    <EmptyRoom scale={1.5} position={[0.5, -0.2, 0]} />
                </Float>

                {/* ✈️ Orbiting Plane with Trail */}
                <OrbitingPlaneWithVoxelTrail />
            </Suspense>

            {/* === 🎮 CAMERA CONTROLS === */}
            <CameraControls
                maxDistance={6}
                minDistance={1.5}
                smoothTime={0.4}
                dampingFactor={0.2}
                dollySpeed={0.5}
            />
        </>
    );
}

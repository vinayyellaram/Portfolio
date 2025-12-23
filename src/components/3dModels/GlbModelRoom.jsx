import React, { Suspense } from "react";
import {
    CameraControls,
    PerspectiveCamera,
    Float,
} from "@react-three/drei";
import { EmptyRoom } from "./EmptyRoom";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { motion } from "framer-motion";
import CinematicCamera from "./CinematicCamera";
import { Snow } from "./Snow"

export default function GlbModelRoom() {
    return (
        <>
            {/* 💡 Lighting Setup */}
            <ambientLight intensity={0.8} />
            <directionalLight
                castShadow
                position={[5, 8, 5]}
                intensity={1.2}
                color="#fff7e6"
            />
            <directionalLight
                position={[-5, 2, -3]}
                intensity={0.4}
                color="#88ccff"
            />
            <pointLight
                position={[0, 2, 0]}
                intensity={0.6}
                distance={6}
                color="#ffffff"
            />

            {/* 🎥 Camera */}
            <PerspectiveCamera makeDefault fov={75} position={[0, 1, 4]} />

            {/* ❄️ Snow Effect */}
            <Suspense>
                <Snow count={500} />
            </Suspense>

            {/* ✨ Post-processing */}
            <EffectComposer>
                <Bloom
                    intensity={1.5}
                    luminanceThreshold={0.3}
                    luminanceSmoothing={0.9}
                    blendFunction={BlendFunction.SCREEN}
                />
            </EffectComposer>

            {/* 🏠 3D Scene */}
            <Float speed={0.5} rotationIntensity={1} floatIntensity={0.2}>
                {/* <motion.group
                    initial={{ opacity: 0, scale: 0.9, rotation: [0, -Math.PI / 6, 0] }}
                    animate={{ opacity: 1, scale: 1, rotation: [0, 0, 0] }}
                    transition={{ duration: 2, ease: "easeOut" }}
                > */}
                <EmptyRoom scale={2} position={[0.5, -0.2, 0]} />
                {/* </motion.group> */}
            </Float>

            {/* 🎮 Camera Controls */}
            <CameraControls maxDistance={4} minDistance={2} />
        </>
    );
}

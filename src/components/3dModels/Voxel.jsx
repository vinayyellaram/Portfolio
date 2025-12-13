import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const VoxelSky = ({ cycleSpeed = 0.02 }) => {
    const starsRef = useRef();
    const sunRef = useRef();
    const moonRef = useRef();
    const time = useRef(0);

    // create static cloud data
    const clouds = useMemo(() =>
        new Array(25).fill().map(() => ({
            position: [
                (Math.random() - 0.5) * 40,
                Math.random() * 15 + 5,
                (Math.random() - 0.5) * 40,
            ],
            size: Math.random() * 1.2 + 0.6,
            speed: (Math.random() - 0.5) * 0.002,
        }))
        , []);

    // star positions
    const stars = useMemo(
        () =>
            new Array(250).fill().map(() => [
                (Math.random() - 0.5) * 80,
                Math.random() * 50,
                (Math.random() - 0.5) * 80,
            ]),
        []
    );

    useFrame((state, delta) => {
        time.current = (time.current + delta * cycleSpeed) % 1;
        const t = time.current;                 // 0 → 1 cycle
        const angle = t * Math.PI * 2;          // full rotation
        const y = Math.cos(angle);
        const isDay = y > 0;

        // move sun & moon opposite each other
        const radius = 30;
        sunRef.current.position.set(Math.sin(angle) * radius, y * 15, 0);
        moonRef.current.position.set(Math.sin(angle + Math.PI) * radius, -y * 15, 0);

        // star twinkle
        if (starsRef.current) {
            starsRef.current.material.opacity = 0.3 + 0.7 * Math.abs(Math.sin(state.clock.elapsedTime * 0.5));
            starsRef.current.rotation.y += 0.0005;
        }

        // sky color blend
        const dayColor = new THREE.Color("#87ceeb");
        const nightColor = new THREE.Color("#1e1e3a");
        const bgColor = dayColor.clone().lerp(nightColor, isDay ? 0 : 1 - (y + 1) / 2);
        state.scene.background = bgColor;
    });

    return (
        <>
            {/* Sky sphere */}
            <mesh>
                <sphereGeometry args={[100, 32, 32]} />
                <meshBasicMaterial side={THREE.BackSide} />
            </mesh>

            {/* Clouds */}
            {clouds.map((c, i) => (
                <mesh
                    key={i}
                    position={c.position}
                    scale={[c.size * 2, c.size, c.size]}
                    onUpdate={(self) => (self.position.x += c.speed)}
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            ))}

            {/* Stars */}
            <Points ref={starsRef} positions={new Float32Array(stars.flat())} stride={3}>
                <PointMaterial color="#ffffff" size={0.2} transparent />
            </Points>

            {/* Sun */}
            <mesh ref={sunRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshBasicMaterial color="#ffd93b" />
            </mesh>

            {/* Moon */}
            <mesh ref={moonRef}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshBasicMaterial color="#dbeafe" />
            </mesh>
        </>
    );
}

export default VoxelSky;
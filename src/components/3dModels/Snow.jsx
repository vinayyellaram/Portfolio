import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Snow({ count = 500 }) {
    const points = useRef();
    const positions = React.useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;   // X range
            pos[i * 3 + 1] = Math.random() * 6;        // Y range (height)
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z range
        }
        return pos;
    }, [count]);

    useFrame(() => {
        const p = points.current.geometry.attributes.position;
        for (let i = 0; i < p.count; i++) {
            p.array[i * 3 + 1] -= 0.02; // fall speed
            if (p.array[i * 3 + 1] < -1) p.array[i * 3 + 1] = 6; // reset to top
        }
        p.needsUpdate = true;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.03}
                sizeAttenuation
                transparent
                opacity={0.8}
            />
        </points>
    );
}

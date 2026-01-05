import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane } from "./Plane";
import * as THREE from "three";

function CloudTrail({ planeRef }) {
    const particles = useRef([]);

    useFrame((state, delta) => {
        if (!planeRef.current) return;

        // Create new voxel cloud particle
        const particle = new THREE.Mesh(
            new THREE.BoxGeometry(0.06, 0.07, 0.06),
            new THREE.MeshStandardMaterial({
                color: "#88ccff",
                transparent: true,
                opacity: 0.9,
            })
        );

        const { x, y, z } = planeRef.current.position;
        particle.position.set(x, y, z);
        particle.scale.setScalar(THREE.MathUtils.randFloat(0.5, 1.2));
        state.scene.add(particle);
        particles.current.push({ mesh: particle, life: 1 });

        // Animate fade + drift
        particles.current.forEach((p) => {
            p.mesh.position.y += delta * 0.1; // float up
            p.mesh.material.opacity -= delta * 0.5; // fade out
            p.life -= delta;
            if (p.life <= 0) {
                state.scene.remove(p.mesh);
            }
        });

        // Keep list short
        particles.current = particles.current.filter((p) => p.life > 0);
    });

    return null;
}

export function OrbitingPlaneWithVoxelTrail() {
    const planeRef = useRef();
    const radius = 3.5;
    const speed = 0.5;
    const height = 2.3;

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        const x = Math.sin(t) * radius;
        const z = Math.cos(t) * radius;
        const y = height + Math.sin(t * 2) * 0.2;

        if (planeRef.current) {
            planeRef.current.position.set(x, y, z);
            planeRef.current.rotation.y = t + Math.PI;
            planeRef.current.rotation.z = Math.sin(t * 1.5) * 0.3;
            planeRef.current.rotation.x = Math.cos(t * 1.2) * 0.1;
        }
    });

    return (
        <>
            <group ref={planeRef}>
                <Plane rotation={[0, Math.PI, 0]} scale={0.24} />
            </group>
            {/* Pixelated Voxel Trail */}
            <CloudTrail planeRef={planeRef} />
        </>
    );
}

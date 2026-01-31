import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane } from "./Plane";
import * as THREE from "three";

function CloudTrail({ planeRef }) {
    const meshRef = useRef();
    const count = 30; // Number of particles in the trail
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useRef(
        new Array(count).fill(null).map(() => ({
            active: false,
            life: 0,
            x: 0, y: 0, z: 0,
            scaleStr: 1
        }))
    );
    
    // Timer to spawn new particles spaced out
    const spawnTimer = useRef(0);
    const spawnInterval = 0.1; // Spawn every 0.1s roughly

    useFrame((state, delta) => {
        if (!planeRef.current || !meshRef.current) return;

        spawnTimer.current += delta;

        // --- Spawn logic ---
        if (spawnTimer.current > spawnInterval) {
            spawnTimer.current = 0;
            // Find first inactive particle to spawn
            const p = particles.current.find(p => !p.active);
            if (p) {
                p.active = true;
                p.life = 1.0; // Reset life
                p.x = planeRef.current.position.x;
                p.y = planeRef.current.position.y;
                p.z = planeRef.current.position.z;
                p.scaleStr = THREE.MathUtils.randFloat(0.5, 1.2);
            }
        }

        // --- Animate & Update Instances ---
        particles.current.forEach((p, i) => {
            if (!p.active) {
                // If inactive, hide it far away or scale to 0
                dummy.position.set(0, -9999, 0);
                dummy.scale.set(0, 0, 0);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(i, dummy.matrix);
                return;
            }

            // Animate
            p.y += delta * 0.1; // drift up
            p.life -= delta; // decay

            if (p.life <= 0) {
                p.active = false;
            } else {
                // Update transformation
                dummy.position.set(p.x, p.y, p.z);
                const s = p.scaleStr * p.life; // Scale down as it dies
                dummy.scale.set(s, s, s);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(i, dummy.matrix);
                
                // Set color opacity via instance color (optional, requires custom shader or supported material)
                // For StandardMaterial, transparency per instance is tricky without custom shader.
                // We simulate "fading" by scaling to zero (above) or we can use setColorAt if we want to change color.
                // For simplicity/perf here: Scale to 0 acts as fade out visually.
            }
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <boxGeometry args={[0.06, 0.07, 0.06]} />
            <meshStandardMaterial 
                color="#88ccff" 
                transparent 
                opacity={0.8} 
            />
        </instancedMesh>
    );
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
            {/* Optimized Voxel Trail */}
            <CloudTrail planeRef={planeRef} />
        </>
    );
}

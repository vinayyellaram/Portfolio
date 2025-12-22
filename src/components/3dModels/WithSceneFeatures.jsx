import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Wrap any 3D model with:
 *  - Shadows
 *  - Optional idle micro animation
 *  - Natural hover / click “wiggle” (like being moved)
 */
export function withSceneFeatures(WrappedComponent, defaultOptions = {}) {
    return function EnhancedComponent({
        animate = defaultOptions.animate || false,
        idleType = defaultOptions.idleType || "float",
        amplitude = defaultOptions.amplitude || 0.05,
        speed = defaultOptions.speed || 1,
        hoverEffect = defaultOptions.hoverEffect ?? true,
        clickEffect = defaultOptions.clickEffect ?? true,
        ...props
    }) {
        const ref = useRef();
        const [hovered, setHovered] = useState(false);
        const [clicked, setClicked] = useState(false);

        // wiggle state for physical nudge
        const wiggle = useRef({ x: 0, y: 0, z: 0 });

        useFrame((state, delta) => {
            if (!ref.current) return;
            const t = state.clock.getElapsedTime();

            // ✨ Subtle idle animation
            if (animate) {
                switch (idleType) {
                    case "float":
                        ref.current.position.y = Math.sin(t * speed) * amplitude;
                        break;
                    case "rotate":
                        ref.current.rotation.y += delta * 0.3 * speed;
                        break;
                    case "tilt":
                        ref.current.rotation.z = Math.sin(t * speed) * amplitude * 2;
                        break;
                    default:
                        break;
                }
            }

            // 💫 Physical-like "nudge" wiggle
            const damp = 8 * delta; // how quickly it settles
            ref.current.rotation.x += (-wiggle.current.x - ref.current.rotation.x) * damp;
            ref.current.rotation.z += (-wiggle.current.z - ref.current.rotation.z) * damp;
            ref.current.position.x += (-wiggle.current.x * 0.05 - ref.current.position.x * 0.02) * damp;

            // gradually return wiggle back to rest
            wiggle.current.x *= 0.9;
            wiggle.current.z *= 0.9;
        });

        const triggerWiggle = (strength = 0.15) => {
            wiggle.current.x = (Math.random() - 0.5) * strength;
            wiggle.current.z = (Math.random() - 0.5) * strength;
        };

        return (
            <group
                ref={ref}
                onPointerOver={() => {
                    if (hoverEffect) {
                        setHovered(true);
                        triggerWiggle(0.1);
                    }
                }}
                onPointerOut={() => setHovered(false)}
                onClick={() => {
                    if (clickEffect) {
                        setClicked(true);
                        triggerWiggle(0.2); // stronger bump on click
                    }
                }}
            >
                <WrappedComponent castShadow receiveShadow {...props} />
            </group>
        );
    };
}

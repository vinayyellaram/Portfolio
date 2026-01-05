import React, { Suspense, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { Cupboard } from "./Cupboard";
import { Cupboard2 } from "./Cupboard2";
import { Chair } from "./Chair";
import { Lamp } from "./Lamp";
import { Plant } from "./Plant";
import { PictureFrame } from "./PictureFrame";
import { SmallCupboard } from "./SmallCupboard";
import { withSceneFeatures } from "./WithSceneFeatures";
import { Computer } from "./Computer";
import { Table } from "./Table";

export function EmptyRoom(props) {
    const { nodes, materials } = useGLTF("./models/Empty_Room.glb");

    // Animation variants (Framer Motion)
    const roomVariants = {
        initial: { opacity: 0, rotation: [0, -Math.PI / 6, 0], scale: 0.9 },
        animate: { opacity: 1, rotation: [0, 0, 0], scale: 1 },
        transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    };

    const furnitureVariants = {
        initial: { y: 2, opacity: 0, rotateY: Math.PI / 4 },
        animate: { y: 0, opacity: 1, rotateY: 0 },
        transition: (i) => ({ duration: 1, delay: i * 0.3, ease: "easeOut" }),
    };

    // Pre-configure furniture with effects
    const furnitureObjects = useMemo(() => {
        const withF = (Comp, config) => withSceneFeatures(Comp, config);

        return [
            { key: "lamp", component: withF(Lamp, { idleType: "tilt", amplitude: 0.02, speed: 0.5 }) },
            { key: "cupboard1", component: withF(Cupboard, {}) },
            { key: "cupboard2", component: withF(Cupboard2, {}) },
            { key: "plant", component: withF(Plant, { idleType: "tilt", amplitude: 0.03, speed: 1 }) },
            { key: "frame", component: withF(PictureFrame, { idleType: "tilt", amplitude: 0.02, speed: 0.7 }) },
            { key: "smallCupboard", component: withF(SmallCupboard, {}) },
        ];
    }, []);

    const BouncingChair = useMemo(
        () => withSceneFeatures(Chair, { idleType: "tilt", hoverEffect: true, clickEffect: true }),
        []
    );

    const roomMeshes = [
        "Untitled",
        "Untitled001",
        "Untitled002",
        "Untitled005",
        "Untitled011",
        "Untitled012",
        "Untitled013",
        "Untitled014",
        "Untitled015",
    ];

    return (
        <motion.group {...props} dispose={null} {...roomVariants}>
            {/* === Invisible floor (for shadows) === */}
            <mesh visible position={[0, -0.19, 0]}>
                <boxGeometry args={[5, 0.2, 5]} />
                <meshStandardMaterial transparent opacity={0} />
            </mesh>

            {/* === Room structure === */}
            {roomMeshes.map(
                (key) =>
                    nodes[key] && (
                        <mesh
                            key={key}
                            castShadow
                            receiveShadow
                            geometry={nodes[key].geometry}
                            material={materials["palette.002"]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
                    )
            )}

            {/* === Furniture & decor === */}
            <Suspense fallback={null}>
                {furnitureObjects.map(({ key, component: Component }, i) => (
                    <motion.group key={key} {...furnitureVariants} custom={i}>
                        <Component />
                    </motion.group>
                ))}

                <BouncingChair position={[-0.7, 0, 0.24]} rotation={[0, Math.PI, 0]} />
                <Computer scale={0.6} position={[-0.5, 0.45, 0.15]} rotation={[0, Math.PI / 2, 0]} />
                <Table scale={0.25} position={[-0.67, 0, 0.1]} rotation={[0, Math.PI / 2, 0]} />
            </Suspense>
        </motion.group>
    );
}

useGLTF.preload("./models/Empty_Room.glb");

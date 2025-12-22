import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CameraControls } from "@react-three/drei";

export default function CinematicCamera() {
    const controlsRef = useRef();

    useFrame((state) => {
        if (state.clock.getElapsedTime() < 3) {
            // Slowly move forward and rotate slightly
            const t = state.clock.getElapsedTime() / 3;
            controlsRef.current.setLookAt(
                0, 1.2, 4 - t,   // camera position
                0, 0.8, 0,       // target
                true
            );
        }
    });

    return <CameraControls ref={controlsRef} maxDistance={5} />;
}

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {
    CameraControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Room2 } from "./Room2";
import Room from "./Room";

function RotatingRoom(props) {
    const roomRef = useRef();

    // Rotate slowly on Y axis
    useFrame((state, delta) => {
        if (roomRef.current) {
            roomRef.current.rotation.y += delta * 0.4; // Adjust 0.1 for speed
        }
    });

    return <Room ref={roomRef} {...props} />;
}

function GlbModelRoom() {
    return (
        <main className="h-full w-full">
            <div className="h-full w-full">
                <Canvas
                    className="!w-full !h-full"
                    camera={{ position: [0, 1.5, 4], fov: 50 }}
                >
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[3, 5, 3]} intensity={1} />
                    <PerspectiveCamera
                        makeDefault
                        fov={75}
                        position={[0, 0, 2]}
                        resolution={1024}
                    />
                    <Suspense>
                        <RotatingRoom scale={1.0} position={[0, -0.2, 0]} rotation={[0.3, -0.7, 0]} />
                    </Suspense>

                    {/* <CameraControls /> */}
                </Canvas>
            </div>
        </main>
    );
}

export default GlbModelRoom;

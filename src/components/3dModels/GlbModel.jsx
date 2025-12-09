import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
    CameraControls,
    PerspectiveCamera,
    Environment,
} from "@react-three/drei";
import Ant from "../3dModels/Ant";

function GlbModel({ currectAnimation }) {
    return (
        <>
            <title>GLB Model</title>
            <main className="px-5">
                <div className="h-[500px]">
                    <Canvas>
                        <PerspectiveCamera
                            makeDefault
                            fov={75}
                            position={[0, 0, 2]}
                            resolution={1024}
                        />
                        {/* <CameraControls /> */}
                        <ambientLight intensity={1.5} />
                        <Suspense>
                            <Ant
                                position={[-0.5, -0.5, -0.2]}
                                rotation={[-0.50, 1.5, 1.2]}
                                scale={[1.95, 1.95, 1.95]}
                                currectAnimation={currectAnimation}
                            />
                        </Suspense>
                        {/* <Environment
                            background={true}
                            preset="city"
                        /> */}
                    </Canvas>
                </div>
            </main>
        </>
    );
}

export default GlbModel;
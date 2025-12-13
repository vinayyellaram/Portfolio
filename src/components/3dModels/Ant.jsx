import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Ant = ({ currectAnimation, ...props }) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/home_worker_ant_compressed.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        console.log(actions)
        Object.values(actions).forEach((action) => {
            if (currectAnimation == 'play') {
                action.play()
            } else {
                action.stop()
            }
        })

    }, [actions, currectAnimation])


    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.472}>
                    <group
                        name="e8639e21af934f1997114f580e919dc9fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="Object_8">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_145"
                                            geometry={nodes.Object_145.geometry}
                                            material={materials.Default}
                                            skeleton={nodes.Object_145.skeleton}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Camera"
                                    position={[-23.703, 5.558, 424.442]}
                                    rotation={[0.01, 1.522, 0.016]}
                                    scale={100}
                                />
                                <group
                                    name="Carpet"
                                    position={[-20.452, -0.976, 88.223]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={146.507}>
                                    <mesh
                                        name="Carpet_Material013_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Carpet_Material013_0.geometry}
                                        material={materials['Material.013']}
                                    />
                                </group>
                                <group
                                    name="Cube009"
                                    position={[0, 120.74, 99.394]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={[-34.332, -3.846, -20.887]}>
                                    <mesh
                                        name="Cube009_Material004_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Cube009_Material004_0.geometry}
                                        material={materials['Material.004']}
                                    />
                                </group>
                                <group
                                    name="Cylinder001"
                                    position={[-59.73, 90.348, 83.043]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={5.713}>
                                    <mesh
                                        name="Cylinder001_Material002_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Cylinder001_Material002_0.geometry}
                                        material={materials['Material.002']}
                                    />
                                    <group
                                        name="Cylinder002"
                                        position={[-0.588, 0.096, 0.452]}
                                        rotation={[0.09, -0.442, -0.101]}
                                        scale={[0.081, 0.081, 1.221]}>
                                        <mesh
                                            name="Cylinder002__0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cylinder002__0.geometry}
                                            material={materials['Cylinder.002__0']}
                                        />
                                    </group>
                                    <group
                                        name="Cylinder003"
                                        position={[-0.499, -0.426, 0.452]}
                                        rotation={[0.445, -0.07, 1.115]}
                                        scale={[0.081, 0.081, 1.221]}>
                                        <mesh
                                            name="Cylinder003__0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cylinder003__0.geometry}
                                            material={materials['Cylinder.002__0']}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Cylinder005"
                                    position={[-59.491, 92.233, 86.231]}
                                    rotation={[-1.115, -0.071, 0.113]}
                                    scale={[0.464, 0.464, 6.978]}>
                                    <mesh
                                        name="Cylinder005_scissors1_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Cylinder005_scissors1_0.geometry}
                                        material={materials.scissors1}
                                    />
                                    <mesh
                                        name="Cylinder005_Scissors2_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Cylinder005_Scissors2_0.geometry}
                                        material={materials.Scissors2}
                                    />
                                </group>
                                <group
                                    name="Desk"
                                    position={[0, 42.012, 90.334]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={[97.877, 45.24, 42.965]}>
                                    <mesh
                                        name="Desk_Material011_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Desk_Material011_0.geometry}
                                        material={materials['Material.011']}
                                    />
                                </group>
                                <group
                                    name="Keyboard"
                                    position={[0, 85.002, 65.768]}
                                    rotation={[-Math.PI / 2, 0, Math.PI]}
                                    scale={[-25.032, -11.666, -1.742]}>
                                    <mesh
                                        name="Keyboard_Material001_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Keyboard_Material001_0.geometry}
                                        material={materials['Material.001']}
                                    />
                                    <group
                                        name="Cube007"
                                        position={[0, 0.743, -0.607]}
                                        rotation={[-Math.PI, 0, 0]}
                                        scale={[0.477, 0.104, 0.63]}>
                                        <mesh
                                            name="Cube007__0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cube007__0.geometry}
                                            material={materials['Cylinder.002__0']}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Lamp"
                                    position={[71.679, 99.547, 121.061]}
                                    rotation={[-0.585, 0.314, 0.162]}
                                    scale={[4.014, 4.08, 4.244]}>
                                    <mesh
                                        name="Lamp_Material009_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Lamp_Material009_0.geometry}
                                        material={materials['Material.009']}
                                    />
                                    <mesh
                                        name="Lamp_Material010_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Lamp_Material010_0.geometry}
                                        material={materials['Material.009']}
                                    />
                                    <mesh
                                        name="Lamp_Material005_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Lamp_Material005_0.geometry}
                                        material={materials['Material.005']}
                                    />
                                </group>
                                <group
                                    name="Office_Chair"
                                    position={[0, 60.611, -31.36]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}>
                                    <mesh
                                        name="Office_Chair_chair1_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Office_Chair_chair1_0.geometry}
                                        material={materials.chair1}
                                    />
                                    <mesh
                                        name="Office_Chair_Material003_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Office_Chair_Material003_0.geometry}
                                        material={materials['Material.003']}
                                    />
                                    <mesh
                                        name="Office_Chair_Material002_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Office_Chair_Material002_0.geometry}
                                        material={materials['Material.002']}
                                    />
                                </group>
                                <group
                                    name="Paper1"
                                    position={[70.272, 117.571, 88.223]}
                                    rotation={[-Math.PI / 2, 0, 0.222]}
                                    scale={[-8.296, -12.712, -12.712]}>
                                    <mesh
                                        name="Paper1_Paper_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Paper1_Paper_0.geometry}
                                        material={materials.Paper}
                                    />
                                </group>
                                <group
                                    name="Paper2"
                                    position={[75.154, 85.126, 79.427]}
                                    rotation={[-Math.PI / 2, 0, 0.095]}
                                    scale={[-8.296, -12.712, -12.712]}>
                                    <mesh
                                        name="Paper2_Paper_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Paper2_Paper_0.geometry}
                                        material={materials.Paper}
                                    />
                                </group>
                                <group
                                    name="Screen"
                                    position={[0, 120.74, 99.394]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={[-34.332, -3.846, -20.887]}>
                                    <mesh
                                        name="Screen_Material005_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Screen_Material005_0.geometry}
                                        material={materials['Material.005']}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Ant
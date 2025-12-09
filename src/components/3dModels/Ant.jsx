import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
// import AntModel from "./home_worker_ant.glb"

const Ant = ({ currectAnimation, ...props }) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/home_worker_ant.glb')
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
                                <group
                                    name="Area"
                                    position={[0.813, 120.047, 97.025]}
                                    rotation={[Math.PI / 2, 0, 0]}
                                    scale={[45.245, 45.245, 32.688]}>
                                    <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="Object_6" />
                                    </group>
                                </group>
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="Object_8">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_145"
                                            geometry={nodes.Object_145.geometry}
                                            material={materials.Default}
                                            skeleton={nodes.Object_145.skeleton}
                                        />
                                        <group name="Object_144" rotation={[-Math.PI / 2, 0, 0]} />
                                    </group>
                                </group>
                                {/* <group
                                    name="Beautiful_painting_by_Jungle_Jim_Painting_0"
                                    position={[-161.428, 81.882, -0.793]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}>
                                    <mesh
                                        name="Beautiful_painting_by_Jungle_Jim_Painting_0_Beautiful_painting_by_Jungle_Jim_Painting_0_baked_0"
                                        geometry={
                                            nodes
                                                .Beautiful_painting_by_Jungle_Jim_Painting_0_Beautiful_painting_by_Jungle_Jim_Painting_0_baked_0
                                                .geometry
                                        }
                                        material={materials.Beautiful_painting_by_Jungle_Jim_Painting_0_baked}
                                    />
                                </group> */}
                                <group
                                    name="Camera"
                                    position={[-23.703, 5.558, 424.442]}
                                    rotation={[0.01, 1.522, 0.016]}
                                    scale={100}>
                                    <group name="Object_149" />
                                </group>
                                {/* <group
                                    name="Carpet"
                                    position={[-20.452, -0.976, 88.223]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={146.507}>
                                    <mesh
                                        name="Carpet_Material013_0"
                                        geometry={nodes.Carpet_Material013_0.geometry}
                                        material={materials['Material.013']}
                                    />
                                </group> */}
                                <group
                                    name="Cube009"
                                    position={[0, 120.74, 99.394]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={[-34.332, -3.846, -20.887]}>
                                    <mesh
                                        name="Cube009_Material004_0"
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
                                        geometry={nodes.Cylinder005_scissors1_0.geometry}
                                        material={materials.scissors1}
                                    />
                                    <mesh
                                        name="Cylinder005_Scissors2_0"
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
                                        geometry={nodes.Lamp_Material009_0.geometry}
                                        material={materials['Material.009']}
                                    />
                                    <mesh
                                        name="Lamp_Material010_0"
                                        geometry={nodes.Lamp_Material010_0.geometry}
                                        material={materials['Material.010']}
                                    />
                                    <mesh
                                        name="Lamp_Material005_0"
                                        geometry={nodes.Lamp_Material005_0.geometry}
                                        material={materials['Material.005']}
                                    />
                                    <group
                                        name="Spot001"
                                        position={[-0.071, 0.903, -0.643]}
                                        rotation={[-1.519, -1.369, 3.127]}
                                        scale={[1.47, 1.413, 1.493]}>
                                        <group name="Object_174" rotation={[Math.PI / 2, 0, 0]}>
                                            <group name="Object_175" />
                                        </group>
                                    </group>
                                </group>
                                <group
                                    name="Light"
                                    position={[407.625, 590.386, -100.545]}
                                    rotation={[1.89, 0.881, -2.045]}
                                    scale={100}>
                                    <group name="Object_177" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="Object_178" />
                                    </group>
                                </group>
                                {/* <group
                                    name="Obese_Family_picture"
                                    position={[-163.409, 108.618, 95.98]}
                                    rotation={[0, Math.PI / 2, 0]}
                                    scale={15.084}>
                                    <mesh
                                        name="Obese_Family_picture_Obese_Family_picture_baked_0"
                                        geometry={nodes.Obese_Family_picture_Obese_Family_picture_baked_0.geometry}
                                        material={materials.Obese_Family_picture_baked}
                                    />
                                </group> */}
                                <group
                                    name="Office_Chair"
                                    position={[0, 60.611, -31.36]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}>
                                    <mesh
                                        name="Office_Chair_chair1_0"
                                        geometry={nodes.Office_Chair_chair1_0.geometry}
                                        material={materials.chair1}
                                    />
                                    <mesh
                                        name="Office_Chair_Material003_0"
                                        geometry={nodes.Office_Chair_Material003_0.geometry}
                                        material={materials['Material.003']}
                                    />
                                    <mesh
                                        name="Office_Chair_Material002_0"
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
                                        geometry={nodes.Screen_Material005_0.geometry}
                                        material={materials['Material.005']}
                                    />
                                </group>
                                {/* <group
                                    name="Sexy_ant_picture"
                                    position={[0.485, 119.938, 83.958]}
                                    rotation={[-3.132, -0.039, -3.138]}
                                    scale={13.732}>
                                    <mesh
                                        name="Sexy_ant_picture_Empty_0"
                                        geometry={nodes.Sexy_ant_picture_Empty_0.geometry}
                                        material={materials.Empty}
                                    />
                                </group> */}
                                {/* <group
                                    name="Walls"
                                    position={[-163.755, 77.193, 88.138]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}>
                                    <mesh
                                        name="Walls_Walls_baked_0"
                                        geometry={nodes.Walls_Walls_baked_0.geometry}
                                        material={materials.Walls_baked}
                                    />
                                </group>
                                <group
                                    name="Walls001"
                                    position={[-163.755, 77.193, 88.138]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}>
                                    <mesh
                                        name="Walls001_Wooden_Wall_by_Jungle_Jim_0"
                                        geometry={nodes.Walls001_Wooden_Wall_by_Jungle_Jim_0.geometry}
                                        material={materials.Wooden_Wall_by_Jungle_Jim}
                                    />
                                </group> */}
                                <group name="model" rotation={[-Math.PI / 2, 0, 0]} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

// useGLTF.preload('/home_worker_ant.glb')


export default Ant
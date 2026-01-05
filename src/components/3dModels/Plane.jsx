import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Plane(props) {
    const { nodes, materials } = useGLTF('./models/plane.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Untitled"
                castShadow
                receiveShadow
                geometry={nodes.Untitled.geometry}
                material={materials.palette}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/plane.glb')

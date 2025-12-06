import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Box, Torus, Cone } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function FloatingShape({ position, color, type = 'sphere', ...props }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.003
    }
  })

  const shapes = {
    sphere: <Sphere args={[1, 32, 32]} ref={meshRef}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>,
    box: <Box args={[1.5, 1.5, 1.5]} ref={meshRef}>
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </Box>,
    torus: <Torus args={[1, 0.4, 16, 32]} ref={meshRef}>
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </Torus>,
    cone: <Cone args={[1, 2, 32]} ref={meshRef}>
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </Cone>
  }

  return (
    <Float
      position={position}
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      {...props}
    >
      {shapes[type]}
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#88d4d1" />
        <pointLight position={[10, 5, 5]} intensity={0.5} color="#c4b5fd" />
        
        <FloatingShape position={[-3, 2, 0]} color="#88d4d1" type="sphere" />
        <FloatingShape position={[3, -1, -2]} color="#c4b5fd" type="box" />
        <FloatingShape position={[0, -2, -1]} color="#fdc4b6" type="torus" />
        <FloatingShape position={[-2, -1, -3]} color="#88d4d1" type="cone" />
        <FloatingShape position={[2, 2, -2]} color="#fdc4b6" type="sphere" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

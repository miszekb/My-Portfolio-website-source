import { OrbitControls, Stats } from "@react-three/drei"

import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { AxesHelper, TextureLoader } from "three/src/Three.Core.js"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' 
import FakeGlowMaterial from "./FakeGlowMaterial"

export const Shape3D = () => {
    const meshRef = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [glowIntensity, setGlowIntensity] = useState(0)
    const gltf = useLoader(GLTFLoader, './computer.glb')

    useEffect(() => {
        console.log('ON LOAD?', gltf)
        gltf.scene.traverse((node) => {
            node.castShadow = true
        })
    }, [])

    const modifyPosition = (event) => {
        console.log(event)
    }

    useFrame((state, delta) => {
        //meshRef.current.rotation.y += delta / 6;
        setGlowIntensity(Math.sin(20 * delta))
    })

    const [earthTexture] = useLoader(TextureLoader, ['./earth_texture.jpg']);



    return <>
        <spotLight position={[10, 60, 10]}
        angle={0.30}
        penumbra={0.2}
        decay={1}
        castShadow={true}
        intensity={Math.PI * 10}
        color="rgb(255, 251, 227)"
        />
        <directionalLight
        position={[3.3, 100.0, 4.4]}
        color="rgb(255, 255, 255)"
        castShadow
        intensity={0.4}
      />
        <primitive
            scale={0.1}
            object={gltf.scene}
            position={[0, 1, 0]}
            children-0-casthadow
        />
        <mesh
            position={[-0.39, 10.8, 3.9]}
            rotation={[-0.14, 0, 0]}
            ref={meshRef}
            scale={1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            onPointerDown={(event) => modifyPosition(event)}
        >
            <boxGeometry args={[2.7, 2.1, 0.2]} />
            <meshStandardMaterial
                emissive={'#ffffff'}
                emissiveIntensity={0.1}
                lightMapIntensity={0.2}
            />
        </mesh>
        <mesh
            position={[-0.39, 10.8, 3.9]}
            rotation={[-0.14, 0, 0]}
            ref={meshRef}
            scale={1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            onPointerDown={(event) => modifyPosition(event)}
        >
                <boxGeometry args={[2.7, 2.1, 0.5]} />
                <FakeGlowMaterial falloff={2}
                glowInternalRadius={4}
                opacity={glowIntensity}
                glowSharpness={0.9}
                depthTest={true}
                />

            </mesh>

            <mesh
            position={[0, 0, 5]}
            rotation={[0, 0, 0]}
            ref={meshRef}
            scale={1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            onPointerDown={(event) => modifyPosition(event)}
        >
            <boxGeometry args={[25, 0.4, 25]} />
            <meshStandardMaterial
                color={'rgb(189, 132, 115)'}
            />
        </mesh>
        {/* <axesHelper args={[5]}/> */}
        <OrbitControls/>
    </>
}
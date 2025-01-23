import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import { TextureLoader } from "three/src/Three.Core.js"


export const Shape3D = () => {
    const meshRef = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    const modifyPosition = (event) => {
        console.log(event)
    }

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta / 6;
    })

    const [earthTexture] = useLoader(TextureLoader, ['./earth_texture.jpg']);

    return <>
        <spotLight position={[10, 10, 10]} angle={0.20} penumbra={0.2} decay={0} intensity={Math.PI}/>
        <mesh
            ref={meshRef}
            scale={1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            onPointerDown={(event) => modifyPosition(event)}
        >
            <sphereGeometry args={[2, 40, 40]} />
            <meshStandardMaterial
                map={earthTexture}
                emissive={'#ffffff'}
                emissiveIntensity={0.1}
                lightMap={earthTexture}
                lightMapIntensity={0.2}
            />
        </mesh>
    </>
}
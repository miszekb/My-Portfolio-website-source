import { useEffect, useRef, useState } from 'react';
import styles from './MainPage.module.css';
import { WebGLRenderer } from 'three';
import { Canvas, useFrame } from '@react-three/fiber'
import { Shape3D } from '../../components/Shape3D/Shape3D';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const MainPage = () => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const meshRef = useRef()


    return <div className={styles.mainPageContainer}>
        <div className={styles.pageContent}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <div style={{marginTop: 50}}>
                <Canvas>
                    <Shape3D/>
                </Canvas>
            </div>
        </div>
    </div>;
}

export default MainPage;
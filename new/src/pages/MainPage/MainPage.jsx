import { useRef, useState } from 'react';
import styles from './MainPage.module.css';
import { Canvas } from '@react-three/fiber'
import { Shape3D } from '../../components/Shape3D/Shape3D';

const MainPage = () => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const meshRef = useRef()


    return <div className={styles.mainPageContainer}>
        <div className={styles.pageContent}>
            <h1>Welcome friend!</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <div style={{marginTop: 50}}>
                <Canvas
                    style={{height: '500px'}}
                    camera={{
                        fov: 75,
                        position: [-4, 12, 25],
                        rotation: [2, 0.3, 0]
                    }}>
                    <Shape3D/>
                </Canvas>
            </div>
        </div>
    </div>;
}

export default MainPage;
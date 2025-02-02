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
            Welcome to my corner of the internet! I'm a passionate software developer who loves crafting innovative solutions, sharing insights through articles, and exploring new projects. When I'm not coding, you'll find me experimenting in the kitchen, trying out new recipes, and enjoying the creative process. This space is where I combine my love for tech and creativity, sharing both my professional journey and personal passions. Thanks for stopping by – I hope you find inspiration and valuable resources here!
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
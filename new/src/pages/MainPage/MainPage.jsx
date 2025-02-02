import { useRef, useState } from 'react';
import styles from './MainPage.module.css';
import { Canvas } from '@react-three/fiber'
import { Shape3D } from '../../components/Shape3D/Shape3D';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return <div className={styles.mainPageContainer}>
        <div className={styles.pageContent}>
            <h1>Welcome friend!</h1>
            {t('MAIN_PAGE.WELCOME_TEXT')}
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
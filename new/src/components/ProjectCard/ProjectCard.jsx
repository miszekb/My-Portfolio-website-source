import { useEffect, useRef, useState } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = () => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const meshRef = useRef()


    return <div className={styles.projectCardContainer}>
        <div className={styles.cardContent}>
            <div className={styles.projectThumbnail}>
                <img src='./busolapka1.png'></img>
            </div>
            <div className={styles.shortDescription}>
                <div className={styles.description}>
                    <h2>Busołapka (Bus Catcher)</h2>
                    App for navigating through hardships of
                    public transport in the city of Łódź.
                    It offers livetracking of bus lines of interest.
                </div>
                <div className={styles.buttonsContainer}>
                    <button className={styles.button}>See this project!</button>
                    <button className={styles.button}>GitHub</button>
                </div>
            </div>
        </div>
    </div>;
}

export default ProjectCard;
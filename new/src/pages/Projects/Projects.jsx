import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {

    return <div className={styles.projectsContainer}>
        <div className={styles.pageContent}>
            <ProjectCard/>
        </div>
    </div>;
}

export default Projects;
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {

    return <div className={styles.projectsContainer}>
        <div className={styles.pageContent}>
            <h1 className={styles.pageTitle}>My Projects</h1>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>;
}

export default Projects;
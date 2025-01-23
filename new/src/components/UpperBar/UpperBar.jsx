import { Link } from 'react-router';
import styles from './UpperBar.module.css';

export const UpperBar = () => {
    return <div className={styles.upperBarContainer}>
        <Link to="/"><img src='logo.png' width={100} height={60}></img></Link>
        <div className={styles.optionsContainer}>
            <div className={styles.menuOption}>About me</div>
            <Link to="/projects"><div className={styles.menuOption}>My projects</div></Link>
            <Link to="/articles"><div className={styles.menuOption}>Articles</div></Link>
            <div className={styles.menuOption}>Contact</div>
        </div>
    </div>
}

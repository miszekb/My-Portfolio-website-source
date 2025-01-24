import { Link } from 'react-router';
import styles from './UpperBar.module.css';
import { ReactComponent as Logo } from './miszekb.svg';

export const UpperBar = () => {
    return <div className={styles.upperBarContainer}>
        <div className={styles.logo}>
            <Link to="/"><Logo width={80} fill="#ddd"/></Link>
        </div>
        <div className={styles.optionsContainer}>
            <div className={styles.menuOption}>About me</div>
            <Link to="/projects"><div className={styles.menuOption}>My projects</div></Link>
            <Link to="/articles"><div className={styles.menuOption}>Articles</div></Link>
            <div className={styles.menuOption}>Contact</div>
        </div>
    </div>
}

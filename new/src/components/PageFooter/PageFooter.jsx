import styles from './PageFooter.module.css';
import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as LinkedinLogo } from './linkedin.svg';
import { ReactComponent as EmailLogo } from './email.svg';

export const PageFooter = () => {
    return <div className={styles.upperBarContainer}>
        <div className={styles.optionsContainer}>
            <div className={styles.menuOption}>
                <a href='https://github.com/miszekb' target='onclick'>
                    <GithubLogo width={32} height={32}/>
                </a>
            </div>
            <div className={styles.menuOption}>
                <a href='https://www.linkedin.com/in/miszekb/' target='onclick'>
                    <LinkedinLogo width={30} height={30}/>
                </a>
            </div>
            <div className={styles.menuOption}>
                <a href='mailto:miszekb@gmail.com' target='onclick'>
                    <EmailLogo width={35} height={42}/>
                </a>
            </div>
        </div>
    </div>
}

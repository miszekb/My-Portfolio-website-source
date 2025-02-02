import styles from './PageFooter.module.css';
import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as LinkedinLogo } from './linkedin.svg';
import { ReactComponent as EmailLogo } from './email.svg';
import { useTranslation } from 'react-i18next';

export const PageFooter = () => {
    const { i18n } = useTranslation();

    const onLanguageChange = (languageCode) => {
        if (i18n.language !== languageCode) {
            i18n.changeLanguage(languageCode);
        }
    }

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
        <div className={styles.languageOptionsContainer}>
            <div onClick={() => onLanguageChange('pl')}>🇵🇱&emsp;</div>
            <div onClick={() => onLanguageChange('en')}>🇬🇧&emsp;</div>
        </div>
    </div>
}

import { Link } from 'react-router';
import styles from './UpperBar.module.css';
import { ReactComponent as Logo } from './miszekb.svg';
import { ReactComponent as Burger } from './burger.svg';
import { ReactComponent as Close } from './close.svg';
import { useState } from 'react';

export const UpperBar = () => {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState();

    const onMobileMenuClick = (value) => {
        setIsMobileMenuOpen(typeof value !== 'boolean' ? !isMobileMenuOpen : value);
    }

    const getMenuOptions = () => <>
        <Link to="/projects" onClick={() => onMobileMenuClick(false)}><div className={styles.menuOption}>About me</div></Link>
        <Link to="/projects" onClick={() => onMobileMenuClick(false)}><div className={styles.menuOption}>My projects</div></Link>
        <Link to="/articles" onClick={() => onMobileMenuClick(false)}><div className={styles.menuOption}>Articles</div></Link>
        <Link to="/contact" onClick={() => onMobileMenuClick(false)}><div className={styles.menuOption}>Contact</div></Link>
    </>

    return <div className={styles.upperBarContainer}>
            <div className={styles.logo} onClick={() => onMobileMenuClick(false)}>
                <Link to="/"><Logo width={80} fill="#ddd"/></Link>
            </div>
        <div className={styles.optionsContainer}>
            { getMenuOptions() }
        </div>
        <div className={styles.mobileMenu} onClick={onMobileMenuClick}>
            { isMobileMenuOpen ? <Close fill={'#fff'} width={70} height={40}/> : <Burger fill={'#fff'} width={70}/>}
        </div>
        {isMobileMenuOpen && <div className={styles.mobileMenuContainer}>
            <div className={styles.mobileMenuOptionsContainer}>
                { getMenuOptions() }
            </div>
        </div>}
    </div>
}

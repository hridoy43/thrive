import headerLogo from 'assets/headerLogo.svg';
import styles from './appHeader.module.css';

export default function AppHeader() {
    return (
        <div className={styles.appHeader}>
            <div className={styles.headerImgContainer}>
                <img src={headerLogo} alt="logo" className={styles.headerImg} />
            </div>
        </div>
    );
}

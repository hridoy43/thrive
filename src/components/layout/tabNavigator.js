import { FaCalendarAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import styles from './tabNavigator.module.css';

export const TabNavigator = () => {
    const { path } = useRouteMatch();
    const matchPath = (TabPath) => path === TabPath;
    return (
        <div className={styles.navigatorContainer}>
            <Link to="/profile">
                <div className={`${styles.navBtn} ${styles.navBtn1} ${matchPath('/profile') ? styles.activeNav : ''}`}>
                    <span className={styles.icon}>
                        <FaCalendarAlt />
                    </span>
                    <span className={styles.label}>Profile</span>
                </div>
            </Link>
            <Link to="/home">
                <div
                    className={`${styles.navBtn} ${styles.navBtn2} ${
                        matchPath('/home') || matchPath('/') ? styles.activeNav : ''
                    }`}
                >
                    <span className={styles.icon}>
                        <AiFillHome />
                    </span>
                    <span className={styles.label}>Home</span>
                </div>
            </Link>
            <Link to="/repo">
                <div className={`${styles.navBtn} ${styles.navBtn3} ${matchPath('/repo') ? styles.activeNav : ''}`}>
                    <span className={styles.icon}>
                        <BiGitRepoForked />
                    </span>
                    <span className={styles.label}>Repo</span>
                </div>
            </Link>
        </div>
    );
};

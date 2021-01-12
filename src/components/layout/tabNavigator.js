import { FaCalendarAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';
import styles from './tabNavigator.module.css';

export const TabNavigator = () => (
    <div className={styles.navigatorContainer}>
        <div className={styles.navBtn}>
            <span className={styles.icon}>
                <FaCalendarAlt />
            </span>
            <span className={styles.label}>Profile</span>
        </div>
        <div className={styles.navBtn}>
            <span className={styles.icon}>
                <AiFillHome />
            </span>
            <span className={styles.label}>Home</span>
        </div>
        <div className={styles.navBtn}>
            <span className={styles.icon}>
                <BiGitRepoForked />
            </span>
            <span className={styles.label}>Repo</span>
        </div>
    </div>
);

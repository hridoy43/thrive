import { FaGreaterThan } from 'react-icons/fa';
import { AiFillBook } from 'react-icons/ai';
import styles from './repoListItem.module.css';

export const RepoListItem = () => (
    <div className={styles.listItemWrapper}>
        <div className={styles.weekDayWrapper}>
            <span>09</span>
            <span>Sun</span>
        </div>
        <div className={styles.listItem}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <span className={styles.label}>Live Class</span>
                    <span className={styles.subLabel}>Mathematics</span>
                    <span className={styles.secondaryText}>2:40 - 13:08</span>
                </div>
                <span className={styles.icon}>
                    <FaGreaterThan />
                </span>
            </div>
            <div className={styles.logoWrapper}>
                <span className={styles.icon}>
                    <AiFillBook />
                </span>
                <span className={styles.label}>Exam</span>
            </div>
        </div>
    </div>
);

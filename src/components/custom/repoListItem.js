import { FaGreaterThan } from 'react-icons/fa';
import { AiFillBook } from 'react-icons/ai';
import styles from './repoListItem.module.css';

export const RepoListItem = ({ data }) => {
    const { name, language, created_at } = data || {};

    const getWeekDay = (date) => {
        const day = new Date(date).getDay();

        switch (day) {
            case 0:
                return 'Sun';
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
            default:
                return null;
        }
    };

    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.weekDayWrapper}>
                <span>{new Date(created_at).getDate()}</span>
                <span>{getWeekDay(created_at)}</span>
            </div>
            <div className={styles.listItem}>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <span className={styles.label}>{name}</span>
                        <span className={styles.subLabel}>{language}</span>
                        <span className={styles.secondaryText}>{new Date(created_at).toLocaleString() || ''}</span>
                    </div>
                    <span className={styles.icon}>
                        <FaGreaterThan />
                    </span>
                </div>
                <div className={styles.logoWrapper}>
                    <span className={styles.icon}>
                        <AiFillBook />
                    </span>
                    <span className={styles.label}>Repo</span>
                </div>
            </div>
        </div>
    );
};

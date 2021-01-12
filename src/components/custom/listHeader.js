import styles from './listHeader.module.css';

export const ListHeader = ({ label }) => (
    <div className={styles.listHeader}>
        <span className={styles.ListHeaderLabel}>{label || ''}</span>
    </div>
);

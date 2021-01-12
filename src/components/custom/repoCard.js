import styles from './repoCard.module.css';

export const RepoCard = ({ headerContent, cardBody }) => (
    <div className={styles.card}>
        {headerContent ? <div className={styles.cardHeader}>{headerContent}</div> : null}
        <div className={styles.cardBody}>{cardBody}</div>
    </div>
);

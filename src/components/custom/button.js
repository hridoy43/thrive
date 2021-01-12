import styles from './button.module.css';

export const Button = ({ label, icon, className, ...props }) => (
    <button type="button" className={`${styles.btn} ${className || ''}`} {...props}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        {label}
    </button>
);

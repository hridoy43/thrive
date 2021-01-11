import styles from './button.module.css';

export const Button = ({ label, className, ...props }) => (
    <button type="button" className={`${styles.btn} ${className || ''}`} {...props}>
        {label}
    </button>
);

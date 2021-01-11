import styles from './input.module.css';

export const Input = ({ label, ...props }) => (
    <div className={styles.inputFieldWrapper}>
        {label ? (
            <div>
                <span className={styles.inputLabel}>{label}</span>
                <br />
            </div>
        ) : null}
        <input {...props} className={styles.inputBox} />
    </div>
);

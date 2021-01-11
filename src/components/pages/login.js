import PageContainer from 'components/layout/pageContainer';
import { Input, Button } from 'components/custom';
import loginPageLogo from 'assets/loginPageLogo.svg';
import book from 'assets/book.svg';
import styles from './login.module.css';

export const Login = () => (
    <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
            <img src={loginPageLogo} alt="logo" className={`${styles.logo} ${styles.nameLogo}`} />
            <img src={book} alt="book" className={`${styles.logo} ${styles.bookLogo}`} />
        </div>
        <p className={styles.infoText}>Please find the ID and PIN from SMS. Don’t share your ID or PIN with anyone.</p>
        <div style={{ width: '100%', maxWidth: '358px' }}>
            <Input label="ID" placeholder="Enter your ID...." type="text" />
            <Input label="PIN" placeholder="Enter your PIN...." type="password" />
        </div>
        <Button label="Log In" className={styles.loginBtn} />
    </div>
);

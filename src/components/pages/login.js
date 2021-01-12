import { useEffect, useState } from 'react';
import { Input, Button } from 'components/custom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import loginPageLogo from 'assets/loginPageLogo.svg';
import book from 'assets/book.svg';
import { signIn } from 'redux/actions';
import styles from './login.module.css';

export const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [id, setId] = useState(null);
    const [pin, setPin] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const onLogin = () => {
        if (id && pin) {
            setErrorMsg('');
            dispatch(signIn());
            history.push('/profile');
        } else setErrorMsg('ID or PIN missing!');
    };

    useEffect(() => {
        if (id || pin) {
            setErrorMsg('');
        }
    }, [id, pin]);

    return (
        <div className={styles.loginContainer}>
            <div className={styles.logoContainer}>
                <img src={loginPageLogo} alt="logo" className={`${styles.logo} ${styles.nameLogo}`} />
                <img src={book} alt="book" className={`${styles.logo} ${styles.bookLogo}`} />
            </div>
            <p className={styles.infoText}>
                Please find the ID and PIN from SMS. Don’t share your ID or PIN with anyone.
            </p>
            <div style={{ width: '100%', maxWidth: '358px' }}>
                <Input label="ID" placeholder="Enter your ID...." type="text" onChange={(e) => setId(e.target.value)} />
                <Input
                    label="PIN"
                    placeholder="Enter your PIN...."
                    type="password"
                    onChange={(e) => setPin(e.target.value)}
                />
            </div>
            {errorMsg ? <p>{errorMsg}</p> : null}
            <Button label="Log In" className={styles.loginBtn} onClick={onLogin} />
        </div>
    );
};

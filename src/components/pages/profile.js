import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser, signOut } from 'redux/actions';
import { PageContainer, ContentContainer } from 'components/layout';
import { Button, LoadingPage } from 'components/custom';
import styles from './profile.module.css';

export const Profile = () => {
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const { avatar_url, name, type, location, blog } = user?.data || {};

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user?.data) dispatch(fetchUser());
    }, [user?.data]);

    function logOut() {
        dispatch(signOut());
        history.push('/login');
    }

    return (
        <PageContainer header>
            <ContentContainer>
                {user?.status ? (
                    <LoadingPage />
                ) : (
                    <>
                        <img
                            src={
                                avatar_url ||
                                'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
                            }
                            alt="avatar"
                            className={styles.avatar}
                        />
                        <Button label="Edit" className={styles.editBtn} />
                        <h3 className={styles.name}>{name}</h3>
                        {user?.data ? (
                            <div className={styles.listContainer}>
                                <ul>
                                    <li>{type}</li>
                                    <li>{location}</li>
                                    <li>{blog}</li>
                                </ul>
                            </div>
                        ) : null}

                        <div className={styles.credContainer}>
                            <div className={styles.credInfoWrapper}>
                                <span>
                                    <strong>Email: </strong> thrive@gmail.com
                                </span>
                                <Button label="Change" className={styles.changeBtn} />
                            </div>
                            <div className={styles.credInfoWrapper}>
                                <span>
                                    <strong>Password: </strong>**************
                                </span>
                                <Button label="Change" className={styles.changeBtn} />
                            </div>
                        </div>
                    </>
                )}
                <Button label="Log Out" className={styles.logoutBtn} onClick={logOut} />
            </ContentContainer>
        </PageContainer>
    );
};

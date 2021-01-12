import { PageContainer, ContentContainer } from 'components/layout';
import { Button } from 'components/custom';
import styles from './profile.module.css';

export const Profile = () => (
    <PageContainer header>
        <ContentContainer>
            <img
                src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                alt="avatar"
                className={styles.avatar}
            />
            <Button label="Edit" className={styles.editBtn} />
            <h3 className={styles.name}>Sadia Zaman</h3>
            <div className={styles.listContainer}>
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>

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

            <Button label="Log Out" className={styles.logoutBtn} />
        </ContentContainer>
    </PageContainer>
);

import { PageContainer, ContentContainer } from 'components/layout';
import { RepoCard, ListHeader, Button, RepoListItem } from 'components/custom';
import styles from './repo.module.css';

export const Repo = () => (
    <PageContainer header>
        <ContentContainer>
            <RepoCard
                headerContent={
                    <div className={styles.cardHeader}>
                        <p className={styles.title}>hello</p>
                        <div className={styles.timeLeftWrapper}>
                            <span className={styles.timeLeftLabel}>Time Left:</span>
                            <span className={styles.time}> 2:30:41</span>
                        </div>
                    </div>
                }
                cardBody={
                    <div className={styles.cardBody}>
                        <h4 className={styles.title}>Physics Solve Class</h4>
                        <div className={styles.timeWrapper}>
                            <span className={styles.time}>2:00 PM</span>
                            <span className={styles.date}>19 Apr 2020 (Sunday)</span>
                        </div>
                        <Button label="Join Now!" className={styles.btn} />
                    </div>
                }
            />
            <ListHeader label="May 2020" />
            <RepoListItem />
            <RepoListItem />
            <RepoListItem />
            <RepoListItem />
            <RepoListItem />
            <RepoListItem />
            <RepoListItem />
        </ContentContainer>
    </PageContainer>
);

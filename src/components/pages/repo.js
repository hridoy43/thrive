import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepo } from 'redux/actions';
import { PageContainer, ContentContainer } from 'components/layout';
import { RepoCard, ListHeader, Button, RepoListItem } from 'components/custom';
import styles from './repo.module.css';

export const Repo = () => {
    const repo = useSelector((state) => state.repo);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!repo?.data) {
            dispatch(fetchRepo());
        }
    }, [repo?.data]);

    const renderRepoList = (repoList) => {
        if (Array.isArray(repoList) && repoList?.length)
            return repoList.map((item, i) => {
                if (i % 5 === 0)
                    return (
                        <div
                            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            key={i}
                        >
                            <ListHeader label={`List ${i / 5 + 1}`} />
                            <RepoListItem data={item} />
                        </div>
                    );
                return <RepoListItem data={item} key={i} />;
            });
    };

    return (
        <PageContainer header>
            <ContentContainer>
                <RepoCard
                    headerContent={
                        <div className={styles.cardHeader}>
                            <p className={styles.title}>Repos</p>
                            <div className={styles.timeLeftWrapper}>
                                <span className={styles.timeLeftLabel}>Total Repo:</span>
                                <span className={styles.time}> {repo?.data?.length || 0}</span>
                            </div>
                        </div>
                    }
                    cardBody={
                        <div className={styles.cardBody}>
                            <h4 className={styles.title}>Github.com</h4>
                            <div className={styles.timeWrapper}>
                                <span className={styles.time}>
                                    {new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true })}
                                </span>
                                <span className={styles.date}>{new Date().toDateString()}</span>
                            </div>
                            <Button label="Join Now!" className={styles.btn} />
                        </div>
                    }
                />
                {renderRepoList(repo?.data || [])}
            </ContentContainer>
        </PageContainer>
    );
};

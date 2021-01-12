import { useRouteMatch } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';
import styles from './breadcrumb.module.css';

export const Breadcrumb = () => {
    const { path } = useRouteMatch();
    const pathArr = typeof path === 'string' ? path.split('/') : [];

    const getPathIcon = (pathArrList) => {
        const iconPath = pathArrList[pathArrList.length - 1];
        switch (iconPath) {
            case 'home' || path === '/':
                return <AiFillHome />;
            case 'profile':
                return <FaUserCircle />;
            case 'repo':
                return <BiGitRepoForked />;
            default:
                return null;
        }
    };

    const renderPathString = (pathArrList) => {
        console.log('Log ~ file: breadcrumb.js ~ line 25 ~ renderPathString ~ pathArrList', pathArrList);
        if (Array.isArray(pathArrList))
            return pathArrList.map((item, i) => (
                <span key={i}>
                    {i > 1 ? ' > ' : ''}
                    {item.toUpperCase()}
                </span>
            ));
    };

    return (
        <div className="justify-align-center" style={{ paddingTop: 20 }}>
            <span className={styles.pathIcon}>{getPathIcon(pathArr)}</span>
            <div className={styles.pathLabel}>{renderPathString(pathArr)}</div>
        </div>
    );
};

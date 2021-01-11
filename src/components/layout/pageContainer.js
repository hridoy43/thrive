import AppHeader from './appHeader';

export default function PageContainer({ header, children }) {
    return (
        <div className="wrapper">
            {header ? <AppHeader /> : null}
            <div style={{ padding: '15px' }}>{children}</div>
        </div>
    );
}

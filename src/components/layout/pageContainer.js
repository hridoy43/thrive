import AppHeader from './appHeader';

export default function PageContainer({ header, children }) {
    return (
        <div style={{ minHeight: '100%' }}>
            {header ? <AppHeader /> : null}
            <div style={{ padding: '15px' }}>{children}</div>
        </div>
    );
}

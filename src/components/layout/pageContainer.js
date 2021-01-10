import AppHeader from './appHeader';

export default function PageContainer({ children }) {
    return (
        <div>
            <AppHeader />
            <div style={{ padding: '15px' }}>{children}</div>
        </div>
    );
}

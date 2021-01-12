import { AppHeader, TabNavigator } from 'components/layout';

export function PageContainer({ header, children }) {
    return (
        <div style={{ minHeight: '100%', marginBottom: 54 }}>
            {header ? <AppHeader /> : null}
            <div style={{ padding: '15px' }}>{children}</div>
            <TabNavigator />
        </div>
    );
}

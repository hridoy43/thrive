import { AppHeader, TabNavigator, Breadcrumb } from 'components/layout';

export function PageContainer({ header, children }) {
    return (
        <div style={{ minHeight: '100%', paddingTop: 72, marginBottom: 54 }}>
            <Breadcrumb />
            {header ? <AppHeader /> : null}
            <div style={{ padding: '15px' }}>{children}</div>
            <TabNavigator />
        </div>
    );
}

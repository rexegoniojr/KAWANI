import * as React from 'react';
import { notification } from 'antd';
import type { NotificationInstance } from 'antd/es/notification/interface';
import type { ReactNode } from 'react';

const NotificationContext = React.createContext<NotificationInstance | null>(null);

export const useNotification = (): NotificationInstance => {
    const context = React.useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

interface NotificationProviderProps {
    children: ReactNode;
}

const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();

    return (
        <NotificationContext.Provider value={api}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
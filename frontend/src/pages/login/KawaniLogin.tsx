import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import { Helmet } from 'react-helmet-async';
import LoginForm from './components/LoginForm';
import BrandSide from './components/BrandSide';

const { Content } = Layout;

const KawaniLogin: React.FC = () => {

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0f172a', // Slate 900
                    borderRadius: 8,
                },
            }}
        >
            <Helmet>
                <title>Kawani | Login</title>
            </Helmet>
            <Layout
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                className="bg-slate-50 p-4"
            >
                <Content className="w-full max-w-[1100px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <BrandSide />
                    <LoginForm />
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default KawaniLogin;
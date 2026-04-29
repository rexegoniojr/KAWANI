import React from 'react';
import { Form, Input, Button, Checkbox, Layout, Typography, ConfigProvider } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const { Content } = Layout;
const { Title, Text } = Typography;

const KawaniLogin: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Login Success:', values);
    };

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
                    {/* Left Side: Branding/Visual (Hidden on small mobile if needed, but here responsive) */}
                    <div className="hidden md:flex md:w-1/2 bg-slate-900 p-12 flex-col justify-between text-white relative overflow-hidden">
                        <div className="z-10">
                            <div className="flex items-center gap-2 mb-8">
                                <ShieldCheck size={32} className="text-blue-400" />
                                <span className="text-2xl font-bold tracking-tight">KAWANI</span>
                            </div>
                            <Title level={2} className="!text-white !mb-4">
                                Empowering the Filipino Workforce.
                            </Title>
                            <Text className="!text-white text-lg">
                                Manage your profile, attendance, and benefits in one integrated ecosystem.
                            </Text>
                        </div>

                        <div className="z-10 mt-auto">
                            <Text className="!text-slate-500 italic">
                                "Connecting people, streamlining progress."
                            </Text>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="mb-10 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 md:hidden">
                                <ShieldCheck size={28} className="text-slate-900" />
                                <span className="text-xl font-bold">KAWANI</span>
                            </div>
                            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                                Welcome Back
                            </h1>
                            <p className="text-slate-500 mt-2">Please enter your credentials to access HIRS</p>
                        </div>

                        <Form
                            name="kawani_login"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            size="large"
                            className="w-full"
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Employee ID!' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className="text-slate-400" />}
                                    placeholder="Employee ID or Email"
                                    className="py-3"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="text-slate-400" />}
                                    placeholder="Password"
                                    className="py-3"
                                />
                            </Form.Item>

                            <div className="flex items-center justify-between mb-6">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox className="text-slate-600">Remember me</Checkbox>
                                </Form.Item>
                                <a className="text-sm font-medium text-blue-600 hover:text-blue-800" href="">
                                    Forgot password?
                                </a>
                            </div>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    icon={<LoginOutlined />}
                                    className="h-12 bg-slate-900 hover:bg-slate-800 border-none text-lg font-semibold transition-all"
                                >
                                    Sign In
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className="mt-8 text-center">
                            <Text className="text-slate-400">
                                Need help? <a href="#" className="text-slate-600 underline">Contact HR Support</a>
                            </Text>
                        </div>
                    </div>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default KawaniLogin;
import React from 'react';
import { Button, Input, Form, Checkbox, ConfigProvider, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

// Define the shape of our form values
interface LoginValues {
    username?: string;
    password?: string;
    remember?: boolean;
}

const KawaniLanding: React.FC = () => {
    const onFinish = (values: LoginValues): void => {
        console.log('Form Submitted:', values);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0038A8', // Philippine Blue
                    borderRadius: 10,
                    fontFamily: "'Inter', sans-serif",
                },
                components: {
                    Button: {
                        controlHeightLG: 48,
                        fontWeight: 600,
                    },
                    Input: {
                        controlHeightLG: 48,
                    }
                }
            }}
        >
            <div className="relative min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-hidden">

                {/* BACKGROUND ELEMENTS: Philippine Map & Sun Motif */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                    {/* Reference Map Image as Watermark */}
                    <img
                        src="/PHMAP.png"
                        alt="Philippines Map"
                        className="absolute right-[-10%] top-[10%] h-[110%] w-auto object-contain grayscale opacity-10 rotate-12"
                    />

                    {/* Stylized Sun Rays (Flag Inspiration) */}
                    <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-100px] left-[20%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
                    <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[80px]" />
                </div>

                {/* NAVIGATION */}
                <nav className="relative z-20 flex justify-between items-center px-6 py-6 md:px-16">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#0038A8] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                            <span className="text-white font-black text-xl">K</span>
                        </div>
                        <h1 className="text-2xl font-black tracking-tight text-slate-900">
                            KAWANI<span className="text-[#CE1126]">.</span>
                        </h1>
                    </div>

                    <div className="hidden md:flex gap-8 items-center text-sm font-bold text-slate-600">
                        <a href="#" className="hover:text-[#0038A8] transition-colors uppercase tracking-widest text-[11px]">Dashboard</a>
                        <a href="#" className="hover:text-[#0038A8] transition-colors uppercase tracking-widest text-[11px]">Serbisyo</a>
                        <Button type="primary" ghost className="border-[#0038A8] text-[#0038A8]">
                            Mag-ugnay
                        </Button>
                    </div>
                </nav>

                {/* HERO & LOGIN SECTION */}
                <main className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 py-12 gap-12 lg:gap-24">

                    {/* Left Content: Philippine Context */}
                    <div className="lg:w-1/2 text-center lg:text-left max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-white shadow-sm border border-slate-200 rounded-full">
                            <span className="flex h-2 w-2 rounded-full bg-[#FCD116] animate-pulse"></span>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                                Human Resource Information System
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-6">
                            Alaga sa <span className="text-[#0038A8]">Kawani</span>,<br />
                            Lakas ng <span className="text-[#CE1126]">Bayani</span>.
                        </h2>

                        <p className="text-slate-500 text-lg md:text-xl mb-8 leading-relaxed font-medium">
                            Ang makabagong HRIS na ginawa para sa bawat organisasyong Pilipino. Simple, mabilis, at maaasahan.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-slate-800">100%</span>
                                <span className="text-xs uppercase tracking-widest text-slate-400">Gawang Pinoy</span>
                            </div>
                            <div className="w-[1px] h-10 bg-slate-300 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-slate-800">24/7</span>
                                <span className="text-xs uppercase tracking-widest text-slate-400">Suporta</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Login Card */}
                    <div className="lg:w-[440px] w-full relative">
                        {/* Aesthetic Border Accent */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#0038A8] via-[#FCD116] to-[#CE1126] rounded-[2.1rem] blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-slate-100">
                            <div className="mb-10 text-center lg:text-left">
                                <Title level={3} className="!mb-1 !font-black">Tuloy Po Kayo</Title>
                                <Text type="secondary" className="text-sm">Ipasok ang iyong detalye upang mag-login.</Text>
                            </div>

                            <Form
                                name="kawani_login"
                                layout="vertical"
                                onFinish={onFinish}
                                size="large"
                                requiredMark={false}
                            >
                                <Form.Item
                                    name="username"
                                    label={<span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Username o Email</span>}
                                    rules={[{ required: true, message: 'Pakilagay ang iyong username.' }]}
                                >
                                    <Input
                                        prefix={<UserOutlined className="text-slate-300 mr-2" />}
                                        placeholder="hal. juan.delacruz"
                                        className="hover:border-blue-400 focus:border-blue-600 transition-all shadow-sm"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label={<span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Password</span>}
                                    rules={[{ required: true, message: 'Pakilagay ang iyong password.' }]}
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className="text-slate-300 mr-2" />}
                                        placeholder="••••••••"
                                        className="hover:border-blue-400 focus:border-blue-600 transition-all shadow-sm"
                                    />
                                </Form.Item>

                                <div className="flex justify-between items-center mb-8">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox className="text-slate-500 text-[13px]">Tandaan ako</Checkbox>
                                    </Form.Item>
                                    <a href="#" className="text-[13px] font-bold text-[#0038A8] hover:text-[#CE1126]">
                                        Nakalimutan?
                                    </a>
                                </div>

                                <Form.Item className="mb-0">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        icon={<LoginOutlined />}
                                        className="h-14 text-md bg-[#0038A8] hover:bg-[#002b80] border-none shadow-lg shadow-blue-700/30"
                                    >
                                        MAG-LOGIN
                                    </Button>
                                </Form.Item>
                            </Form>

                            <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                                <Text className="text-slate-400 text-xs">
                                    Wala pang account? <a href="#" className="text-[#CE1126] font-bold hover:underline ml-1">Makipag-ugnayan sa HR</a>
                                </Text>
                            </div>
                        </div>
                    </div>
                </main>

                {/* FOOTER */}
                <footer className="relative z-10 py-8 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <Text className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                                &copy; {new Date().getFullYear()} KAWANI HRIS SOLUTIONS
                            </Text>
                        </div>

                        {/* Tricolor Indicator */}
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-1.5 bg-[#0038A8] rounded-full" />
                            <div className="w-8 h-1.5 bg-[#FCD116] rounded-full" />
                            <div className="w-8 h-1.5 bg-[#CE1126] rounded-full" />
                        </div>

                        <Space size="middle" className="text-slate-400 text-xs">
                            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
                            <a href="#" className="hover:text-slate-600 transition-colors">Help</a>
                        </Space>
                    </div>
                </footer>
            </div>
        </ConfigProvider>
    );
};

export default KawaniLanding;
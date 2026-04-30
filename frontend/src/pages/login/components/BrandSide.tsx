import { Typography } from 'antd'
import { ShieldCheck } from 'lucide-react'
const { Title, Text } = Typography;

function BrandSide() {
    return (
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
    )
}

export default BrandSide
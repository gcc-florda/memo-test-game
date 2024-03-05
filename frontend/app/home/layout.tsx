import '@/app/ui/global.css';
import Navbar from '@/app/ui/components/Navbar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
import '@/app/ui/global.css';
import { roboto } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gradient-to-r from-violet-500 to-fuchsia-500`}>
        {children}
      </body>
    </html>
  );
}

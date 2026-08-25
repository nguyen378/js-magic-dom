import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { AuthProvider } from '@/context/auth-context';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin', 'vietnamese'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  title: 'JS Magic DOM - Thực Hành JavaScript DOM Cho Học Sinh Cấp 2',
  description: 'Nền tảng tự học và thực hành JavaScript DOM trực quan, tương tác và gamification cho học sinh THCS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}


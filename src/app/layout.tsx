import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono, Silkscreen, VT323 } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { AuthProvider } from '@/context/auth-context';
import { ThemeProvider } from '@/context/theme-context';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin', 'vietnamese'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'vietnamese'],
});

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  variable: '--font-pixel',
  subsets: ['latin'],
});

const vt323 = VT323({
  weight: '400',
  variable: '--font-vt323',
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${silkscreen.variable} ${vt323.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


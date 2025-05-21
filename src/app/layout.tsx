
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { DynamicBackground } from '@/components/layout/DynamicBackground';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'БыстрыйСтарт: Бесплатный Хостинг с Вечно Бесплатным ISPManager',
  description: 'Получите надежный бесплатный хостинг с полнофункциональной панелью ISPManager бесплатно навсегда! Официально зарегистрированы, соответствие СОРМ, мощная DDoS-защита. Запустите ваш проект с "БыстрыйСтарт"!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="bystrostart-theme"
        >
          <DynamicBackground />
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 md:px-6 relative z-10">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import DockNav from '@/components/DockNav';
import PageTransition from '@/components/PageTransition';
import { DeckThemeProvider } from '@/components/DeckTheme';
import { DeckNavProvider } from '@/components/DeckNav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'I am SangGyoon',
  description: '신입 개발자 김상균의 포트폴리오.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <DeckThemeProvider>
          <DeckNavProvider>
            <PageTransition>{children}</PageTransition>
            <DockNav />
          </DeckNavProvider>
        </DeckThemeProvider>
      </body>
    </html>
  );
}

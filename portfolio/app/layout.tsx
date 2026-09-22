import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '김상균 · 포트폴리오',
  description: '개발자 김상균의 포트폴리오.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

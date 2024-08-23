import { Metadata } from 'next';

import '@/styles/globals.css';

import { Footer } from '@/app/_child-components/Footer';
import { Header } from '@/app/_child-components/Header';

export const metadata: Metadata = {
  title: {
    default: 'test',
    template: `Hello`,
  },
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Provider } from '@/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <Provider>
      <html lang="pt-br">
        <body className={inter.className}>
          <div className="bg-slate-700">{children}</div>
        </body>
      </html>
    </Provider>
  );
}

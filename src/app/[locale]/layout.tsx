import type { Metadata } from 'next';
import React from 'react';
import { Ubuntu } from 'next/font/google';
import Navbar from '../../components/Navbar';
import './globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'davorDev',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
  params: { locale: 'en' | 'es' };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={ubuntu.className}>
        <NextIntlClientProvider messages={messages}>
          <div className='w-screen h-screen bg-gradient-to-bl from-frenchGrey via-frenchGrey to-slateBlue dark:from-delftBlue dark:to-nigth'>
            <div className='h-24'>
              <Navbar />
            </div>
            <div className='h-[calc(100vh-6rem)]'>{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
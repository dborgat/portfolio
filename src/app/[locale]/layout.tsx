import type { Metadata } from 'next';
import React from 'react';
import { Titillium_Web } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Header from '@/components/Header';
import clsx from 'clsx';
import StickyButtons from '@/components/stickyButtons';

const titillium = Titillium_Web({
  weight: ['300', '400', '900', '200'],
  subsets: ['latin'],
});

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
      <body className={clsx('static bg-delftBlue', titillium.className)}>
        <StickyButtons locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <div className='h-24 content-center'>
            <Header />
          </div>
          <div className='md:h-[calc(100vh-6rem)]'>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

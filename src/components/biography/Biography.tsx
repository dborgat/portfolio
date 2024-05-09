import React from 'react';
import Bounded from '../Bounded';
import Heading from '../Heading';
import { useTranslations } from 'next-intl';
import Button from '../Button';
import Image from 'next/image';
import Avatar from './Avatar';

const Biography: React.FC = () => {
  const t = useTranslations('Buttons.aboutMe');

  return (
    <Bounded>
      <div className='md:grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] pb-5'>
        <Heading
          as='h1'
          size='xl'
          className='md:col-start-1 text-center text-pumpkin'
        >
          {t('title')}
        </Heading>
        <div className='prose prose-2xl prose-slate prose-invert col-start-1 grid gap-2 md:p-0 p-2'>
          <span className='block'>{t('content1')}</span>
          <span>{t('content2')}</span>
          <span className='block'>{t('content3')}</span>
          <span>{t('content4')}</span>
        </div>
        <Button text={t('resume')} showLinkIcon={false} className='mt-8' />
        <Avatar />
      </div>
    </Bounded>
  );
};

export default Biography;

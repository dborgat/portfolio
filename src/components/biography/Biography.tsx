import React from 'react';
import Bounded from '../Bounded';
import Heading from '../Heading';
import { useTranslations } from 'next-intl';
import Button from '../Button';
import Avatar from './Avatar';
import TechList from './TechList';

const Biography: React.FC = () => {
  const t = useTranslations('Buttons.aboutMe');

  return (
    <Bounded>
      <div className='lg:grid gap-x-8 gap-y-6 lg:grid-cols-[2fr,1fr] pb-24 md:mt-10'>
        <Heading
          as='h1'
          size='xl'
          className='lg:col-start-1 text-center text-pumpkin'
        >
          {t('title')}
        </Heading>
        <div className='prose prose-2xl prose-slate prose-invert col-start-1 grid gap-2 lg:p-0 p-2'>
          <span>{t('content1')}</span>
          <span>{t('content2')}</span>
          <span>{t('content3')}</span>
          <span>{t('content4')}</span>
        </div>
        <Button text={t('resume')} showLinkIcon={false} className='mt-8' />
        <Avatar />
      </div>
      <TechList />
    </Bounded>
  );
};

export default Biography;

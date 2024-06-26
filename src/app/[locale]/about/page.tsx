'use client';
import React from 'react';
import Bounded from '../../../components/Bounded';
import Heading from '../../../components/Heading';
import { useTranslations, useLocale } from 'next-intl';
import Button from '../../../components/Button';
import Avatar from '../../../components/biography/Avatar';
import TechList from '../../../components/biography/TechList';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Experience from '../../../components/biography/Experience';

const Biography: React.FC = () => {
  const component = React.useRef(null);
  const t = useTranslations('Buttons.aboutMe');
  const locale = useLocale();

  useGSAP(
    () => {
      gsap.fromTo(
        '.biography',
        { opacity: 0 },
        { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
      );
      gsap.fromTo(
        '.avatar2',
        { opacity: 0, scale: 1.4 },
        {
          opacity: 1,
          scale: 1,
          ease: 'power3.inOut',
          duration: 1,
        }
      );
      gsap.fromTo(
        '.avatar',
        { opacity: 0, scale: 1.4 },
        {
          opacity: 1,
          scale: 1,
          ease: 'power3.inOut',
          duration: 1.3,
          delay: 0.5,
        }
      );
    },
    { scope: component }
  );

  return (
    <Bounded ref={component}>
      <div className='lg:grid gap-x-8 gap-y-6 lg:grid-cols-[2fr,1fr] pb-24 md:mt-10 biography opacity-0'>
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
        <a
          href={`${locale === 'es' ? '/dbespcv.pdf' : '/dbengcv.pdf'}`}
          download='davidcv.pdf'
        >
          <Button text={t('resume')} className='mt-8' />
        </a>
        <Avatar />
      </div>
      <TechList />
      <Experience />
    </Bounded>
  );
};

export default Biography;

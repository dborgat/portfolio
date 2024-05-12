'use client';
import React from 'react';
import Bounded from '../Bounded';
import Heading from '../Heading';
import { useTranslations } from 'next-intl';
import Button from '../Button';
import Avatar from './Avatar';
import TechList from './TechList';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Experience from './Experience';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Biography: React.FC = () => {
  const component = React.useRef(null);
  const t = useTranslations('Buttons.aboutMe');

  useGSAP(
    () => {
      gsap.fromTo(
        '.biography',
        { opacity: 0 },
        { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
      );
    },
    { scope: component }
  );

  return (
    <div id='#smooth-wrapper'>
      <Bounded ref={component} id='#smoother-content'>
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
          <Button text={t('resume')} showLinkIcon={false} className='mt-8' />
          <Avatar />
        </div>
        <TechList />
        <Experience />
      </Bounded>
    </div>
  );
};

export default Biography;

'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icons from 'lucide-react';

const NameAndDescription: React.FC = () => {
  const component = useRef(null);
  const t = useTranslations();

  const renderLetters = (text: string, key: string) => {
    if (!text) return;
    return text.split('').map((letter, index) => (
      <span
        key={key + index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.box',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'elastic.out(1,0.3)',
          duration: 0.5,
        }
      );
      tl.fromTo(
        '.name-animation-name',
        { opacity: 0, x: -50, rotate: -10 },
        {
          opacity: 1,
          rotate: 0,
          x: 0,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
          stagger: {
            each: 0.1,
            from: 'random',
          },
          transformOrigin: 'right top',
        }
      );

      tl.fromTo(
        '.job-title',
        { opacity: 0, x: -100, scale: 1.2 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1,0.3)',
        }
      );
    },
    { scope: component }
  );

  return (
    <div ref={component} className='md:col-start-1 size-full content-center'>
      <div className='grid grid-cols-2 justify-between static'>
        <Link href='https://github.com/dborgat' target='_blank'>
          <Image
            src='/github-mark.svg'
            alt='github icon'
            width={15}
            height={15}
            priority
            className='absolute inset-y-52 left-6 w-11 md:hidden'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/david-borgat' target='_blank'>
          <h1 className='lg:text-5xl text-3xl font-bold leading-none job-title opacity-0 text-right '>
            <span className='text-nigth'>/d</span>
            <span className='text-pumpkin hover:text-Linkedin'>borgat</span>
          </h1>
        </Link>
      </div>
      <h1 className='2xl:text-[16rem] text-8xl md:text-9xl lg:text-[11rem] font-extrabold leading-none text-center md:text-left tracking-tighter bg-cardinal opacity-0 z-20 box'>
        <span className='text-pumpkin block md:-ml-8 -ml-3'>
          {renderLetters(t('Index.name'), 'name')}
        </span>
        <span className='text-nigth block -mt-[.45em]'>
          {renderLetters(t('Index.lastName'), 'name')}
        </span>
      </h1>
      <h1 className='md:text-5xl text-3xl leading-none tracking-tighter job-title opacity-0'>
        <span className='text-nigth'>Frontend</span>
        <span className='text-cardinal'>Developer</span>
      </h1>
    </div>
  );
};

export default NameAndDescription;

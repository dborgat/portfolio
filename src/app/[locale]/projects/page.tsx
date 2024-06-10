'use client';
import React from 'react';
import Bounded from '../../../components/Bounded';
import Heading from '../../../components/Heading';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const Projects: React.FC = () => {
  const component = React.useRef(null);
  const t = useTranslations('Buttons.projects');

  useGSAP(
    () => {
      gsap.fromTo(
        '.projects',
        { opacity: 0 },
        { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
      );
      gsap.fromTo(
        '.subtitle',
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'circ.inOut' }
      );
    },
    { scope: component }
  );

  return (
    <Bounded ref={component}>
      <div className='grid gap-y-10 pb-24 md:mt-10 projects opacity-0'>
        <Heading as='h1' size='xl' className='text-center text-pumpkin'>
          {t('title')}
        </Heading>
        <div className='bg-nigth rounded-md p-5 lg:w-2/3 mx-auto subtitle opacity-0'>
          <span className='text-nonPhotoBlue text-2xl'>{t('subtitle')}</span>
        </div>
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={clsx(
              'bg-nigth subtitle rounded-lg gap-10 p-5 lg:w-2/3 w-full mx-auto flex justify-between items-center',
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            )}
          >
            <div className='flex flex-col gap-5 items-center'>
              <Link href='https://nutriyvita.com.ar' passHref target='_blank'>
                <span className='text-pumpkin text-4xl font-sans font-semibold border-b hover:text-oldGold'>
                  Nutri y Vita
                </span>
              </Link>
              <span className='text-pumpkin text-2xl'>
                {t('infoProjects.description')}
              </span>
              <span className='text-nigth text-2xl font-mono font-bold bg-oldGold rounded-lg text-center p-4 hover:scale-105'>
                {t('infoProjects.technologies')}
              </span>
              <Image
                src='/nutri.png'
                alt='nutriyvita'
                width={500}
                height={180}
                className='rounded-lg xl:hidden'
              ></Image>
            </div>
            <Image
              src='/nutri.png'
              alt='nutriyvita'
              width={500}
              height={180}
              className='rounded-lg hidden xl:block hover:scale-105'
            ></Image>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Projects;

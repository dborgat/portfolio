'use client';
import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { workExperience } from '@/utils/constants';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../Heading';
import Bounded from '../Bounded';
import clsx from 'clsx';
import { gsap } from 'gsap';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const component = React.useRef(null);
  const keys = [
    'freelance',
    'genoma',
    'outside',
    'itesa',
    'plataforma',
  ] as const;
  const t = useTranslations('Buttons.aboutMe');

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top 80%',
          end: 'bottom 90%',
          scrub: 1,
        },
      });

      const tlm = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: '-10% 70%',
          end: 'bottom 70%',
          scrub: 1,
        },
      });

      tlm.fromTo(
        '.tech-row-m-0',
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2.5, ease: 'circ.out' }
      );
      tlm.fromTo(
        '.tech-row-m-1',
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2.5, ease: 'circ.out' }
      );
      tlm.fromTo(
        '.tech-row-m-2',
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2.5, ease: 'circ.out' }
      );
      tlm.fromTo(
        '.tech-row-m-3',
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2.5, ease: 'circ.out' }
      );
      tlm.fromTo(
        '.tech-row-m-4',
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2.5, ease: 'circ.out' }
      );
      tlm.fromTo(
        '.tech-row-m-5',
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2.5, ease: 'circ.out' }
      );

      tl.fromTo(
        '.tech-row-0',
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 2.5,
          ease: 'circ.out',
        }
      );
      tl.fromTo(
        '.tech-row-1',
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'circ.out',
          duration: 2.5,
        }
      );
      tl.fromTo(
        '.tech-row-2',
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'circ.out',
          duration: 2.5,
        }
      );
      tl.fromTo(
        '.tech-row-3',
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'circ.out',
          duration: 2.5,
        }
      );
      tl.fromTo(
        '.tech-row-4',
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'circ.out',
          duration: 2.5,
        }
      );
      tl.fromTo(
        '.tech-row-5',
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'circ.out',
          duration: 2.5,
        }
      );
    }, component);
    return () => ctx.revert();
  });

  return (
    <section ref={component} className='pb-16 overflow-hidden'>
      <Bounded as='div'>
        <Heading
          as='h2'
          size='xl'
          className='md:col-start-1 mb-20 text-pumpkin'
        >
          {t('experience')}
        </Heading>
        <div className='md:grid hidden gap-5'>
          {workExperience.map(
            ({ company, title, logo, tecnologies }, index) => (
              <div
                key={index}
                className={clsx(
                  `bg-nigth p-5 rounded-lg tech-row-${index} md:opacity-0 shadow-2xl`
                )}
              >
                <div className='mb-5 md:flex grid md:items-center gap-3 justify-items-center'>
                  {!logo ? (
                    <span className='text-4xl text-pumpkin font-bold tracking-tighter mr-4 font-sans'>
                      {company}
                    </span>
                  ) : (
                    <Image
                      src={logo.toString()}
                      alt='logo'
                      width={180}
                      height={90}
                    />
                  )}
                  <span className='text-oldGold text-2xl font-semibold font-sans tracking-tighter block'>
                    {title} :
                    <span className='font-sans font-bold text-cardinal text-2xl ml-2 tracking-tighter'>
                      {t(`jobsDescription.${keys[index]}.date`)}
                    </span>
                  </span>
                </div>
                <p className='text-silver text-2xl pb-5 font-sans'>
                  {t(`jobsDescription.${keys[index]}.description`)}
                </p>
                <div className='flex flex-wrap gap-2 pb-2'>
                  {tecnologies.map((tech, index) => (
                    <div
                      key={index}
                      className=' bg-oldGold p-2 rounded-lg text-nigth font-sans font-bold'
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <div className='grid md:hidden gap-5'>
          {workExperience.map(
            ({ company, title, logo, tecnologies }, index) => (
              <div
                key={index}
                className={clsx(
                  `bg-nigth p-5 rounded-lg tech-row-m-${index} md:opacity-0 shadow-2xl`
                )}
              >
                <div className='mb-5 md:flex grid md:items-center gap-3 justify-items-center'>
                  {!logo ? (
                    <span className='text-4xl text-pumpkin font-bold tracking-tighter mr-4 font-sans'>
                      {company}
                    </span>
                  ) : (
                    <Image
                      src={logo.toString()}
                      alt='logo'
                      width={180}
                      height={90}
                    />
                  )}
                  <span className='text-oldGold text-2xl font-semibold font-sans tracking-tighter block'>
                    {title} :
                    <span className='font-sans font-bold text-cardinal text-2xl ml-2 tracking-tighter'>
                      {t(`jobsDescription.${keys[index]}.date`)}
                    </span>
                  </span>
                </div>
                <p className='text-silver text-2xl pb-5 font-sans'>
                  {t(`jobsDescription.${keys[index]}.description`)}
                </p>
                <div className='flex flex-wrap gap-2 pb-2'>
                  {tecnologies.map((tech, index) => (
                    <div
                      key={index}
                      className=' bg-oldGold p-2 rounded-lg text-nigth font-sans font-bold'
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Experience;

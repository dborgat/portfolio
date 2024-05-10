'use client';
import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { techListArray } from '@/utils/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Heading from '../Heading';
import Bounded from '../Bounded';

gsap.registerPlugin(ScrollTrigger);

const TechList: React.FC = () => {
  const component = React.useRef(null);
  const t = useTranslations('Buttons.aboutMe');

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 4,
        },
      });

      tl.fromTo(
        '.tech-row',
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: 'power1.inOut',
        }
      );
    }, component);
    return () => ctx.revert();
  });

  return (
    <section className='overflow-hidden' ref={component}>
      <Bounded as='div'>
        <Heading
          as='h2'
          size='xl'
          className='md:col-start-1 mb-20 text-pumpkin'
        >
          {t('technologies')}
        </Heading>
        {techListArray.map(({ name, color }, index) => (
          <div
            key={index}
            className='tech-row mb-8 flex items-center text-nowrap uppercase font-sans justify-center gap-4'
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className='tech-item md:text-8xl text-5xl font-extrabold tracking-tighter'
                  style={{
                    color: index % 2 === 0 && color ? color : '#AEAFB3',
                  }}
                >
                  {name}
                </span>
                <span className='md:text-7xl text-4xl font-bold tracking-tighter text-[#AEAFB3]'>
                  -
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </Bounded>
    </section>
  );
};

export default TechList;

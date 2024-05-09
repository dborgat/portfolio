'use client';
import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'use-intl';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex';
import ActionButtons from '@/components/ActionButtons';
import InfoContainer from '@/components/InfoContainer';
import TitleAndSubtitleContainer from '@/components/TitleAndSubtitleContainer';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Bounded from '@/components/Bounded';
import NameAndDescription from '@/components/hero/NameAndDescription';
import { Shapes } from '@/components/hero/Shapes';
import AtomView from '@/components/hero/AtomView';

const Home: React.FC = () => {
  const component = useRef(null);

  //const title = splitStringUsingRegex(t('Index'));
  //const subtitle = splitStringUsingRegex(t('Index.subtitle'));
  //const info = splitStringUsingRegex(t('Buttons.info'));

  // const defaultAnimations = {
  //   hidden: { opacity: 0 },
  //   reveal: { opacity: 1 },
  // };

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.box',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
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
        { opacity: 0, x: 150, scale: 1.2 },
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
    <Bounded className='grid min-h-[90vh] md:grid-cols-2 grid-cols-1 items-center'>
      {/* <Shapes /> */}
      <div className='md:col-start-1' ref={component}>
        <NameAndDescription />
      </div>
      {/* title and subtitle */}
      {/* <div className='w-full md:h-full h-2/5 flex flex-col justify-center'>
        <TitleAndSubtitleContainer
        title={title}
        defaultAnimations={defaultAnimations}
        subtitle={subtitle}
        />
      </div> */}
      {/* buttons */}
      {/* <div className='w-full self-center h-full flex flex-col items-center'>
        <ActionButtons info={info} defaultAnimations={defaultAnimations} />
      </div> */}
      <AtomView />
    </Bounded>
  );
};

export default Home;

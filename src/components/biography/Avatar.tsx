'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Avatar: React.FC = () => {
  const img = useRef<HTMLDivElement>(null);
  const img2 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
    { scope: img }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        '.avatar2',
        { opacity: 0, scale: 1.4 },
        {
          opacity: 1,
          scale: 1,
          ease: 'power3.inOut',
          duration: 1.3,
        }
      );
    },
    { scope: img2 }
  );

  return (
    <>
      <div
        className='relative row-start-1 max-w-sm md:col-start-2 md:row-start-1 md:row-end-3 content-between hidden md:block'
        ref={img2}
      >
        <div className='avatar2 overflow-hidden rounded-3xl border-2 border-nigth -rotate-3 opacity-0'>
          <Image
            src='/davor4.jpeg'
            alt='hero-image'
            width={450}
            height={90}
            priority
          />
        </div>
      </div>
      <div
        ref={img}
        className='relative row-start-1 max-w-sm md:col-start-2 md:row-start-2 md:row-end-3 content-end hidden md:block'
      >
        <div className='avatar overflow-hidden rounded-3xl border-2 border-nigth opacity-0 rotate-3'>
          <Image
            src='/davor.jpeg'
            alt='hero-image'
            width={450}
            height={90}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;

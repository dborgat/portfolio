import Image from 'next/image';
import React from 'react';

const Avatar: React.FC = () => {
  return (
    <React.Fragment>
      <div className='relative row-start-1 max-w-sm md:col-start-2 md:row-start-1 md:row-end-3 content-between hidden lg:block'>
        <Image
          src='/davor4.jpeg'
          alt='hero-image'
          width={450}
          height={90}
          priority
          className='avatar2 overflow-hidden rounded-3xl border-2 border-nigth -rotate-3 opacity-0'
        />
      </div>
      <div className='relative row-start-1 max-w-sm md:col-start-2 md:row-start-2 md:row-end-3 content-end hidden lg:block'>
        <Image
          src='/davor.jpeg'
          alt='hero-image'
          width={450}
          height={90}
          priority
          className='avatar overflow-hidden rounded-3xl border-2 border-nigth opacity-0 rotate-3'
        />
      </div>
    </React.Fragment>
  );
};

export default Avatar;

import { useTranslations } from 'next-intl';
import React from 'react';

const NameAndDescription: React.FC = () => {
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
  return (
    <>
      <h1 className='md:text-[16rem] text-8xl font-extrabold leading-none tracking-tighter bg-cardinal opacity-0 box'>
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
    </>
  );
};

export default NameAndDescription;

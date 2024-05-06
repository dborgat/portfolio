'use client';
import React from 'react';
import { useTranslations } from 'use-intl';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex';
import ActionButtons from '@/components/ActionButtons';
import InfoContainer from '@/components/InfoContainer';
import TitleAndSubtitleContainer from '@/components/TitleAndSubtitleContainer';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const t = useTranslations();

  const title = splitStringUsingRegex(t('Index.title'));
  const subtitle = splitStringUsingRegex(t('Index.subtitle'));
  const info = splitStringUsingRegex(t('Buttons.info'));

  const defaultAnimations = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <div className='flex flex-col content-center w-full h-full py-5 md:px-14 px-5'>
      {/* title and subtitle */}
      <div className='w-full md:h-full h-2/5 flex flex-col justify-center'>
        <TitleAndSubtitleContainer
          title={title}
          defaultAnimations={defaultAnimations}
          subtitle={subtitle}
        />
      </div>
      {/* buttons */}
      <div className='w-full self-center h-full flex flex-col items-center'>
        <ActionButtons info={info} defaultAnimations={defaultAnimations} />
      </div>
    </div>
  );
};

export default Home;

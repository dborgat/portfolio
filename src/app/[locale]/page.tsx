'use client';
import React from 'react';
import { useTranslations } from 'use-intl';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex';
import ActionButtons from '@/components/ActionButtons';
import InfoContainer from '@/components/InfoContainer';
import TitleAndSubtitleContainer from '@/components/TitleAndSubtitleContainer';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const [buttonsInfo, setButtonsInfo] = React.useState({
    title: '',
    subtitle: '',
  });
  const [expand, setExpand] = React.useState(false);
  const router = useRouter();

  const t = useTranslations();

  const handleChat = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) => {
    setButtonsInfo({ title, subtitle });
  };

  const title = splitStringUsingRegex(t('Index.title'));
  const subtitle = splitStringUsingRegex(t('Index.subtitle'));
  const info = splitStringUsingRegex(t('Buttons.info'));

  const defaultAnimations = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <div className='flex flex-col content-center w-full h-full py-5 px-14'>
      {/* title and subtitle */}
      <div className='w-full h-full flex flex-col justify-center'>
        <TitleAndSubtitleContainer
          title={title}
          defaultAnimations={defaultAnimations}
          subtitle={subtitle}
        />
        {/* <ActionButtons
          setButtonsInfo={setButtonsInfo}
          info={info}
          defaultAnimations={defaultAnimations}
        /> */}
      </div>
      {/* buttons and chat */}
      <div className='w-full self-center h-full flex flex-col items-center'>
        {/* <MotionChat /> */}
        <ActionButtons
          setButtonsInfo={setButtonsInfo}
          info={info}
          defaultAnimations={defaultAnimations}
        />
        {/* <InfoContainer
          buttonsInfo={buttonsInfo}
          expand={expand}
          setExpand={setExpand}
        /> */}
      </div>
    </div>
  );
};

export default Home;

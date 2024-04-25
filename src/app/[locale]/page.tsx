'use client';
import React from 'react';
import { useTranslations } from 'use-intl';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex';
import { ActionButtons } from '@/components/ActionButtons';
import { InfoContainer } from '@/components/InfoContainer';
import TitleAndSubtitleContainer from '@/components/TitleAndSubtitleContainer';

const Home: React.FC = () => {
  const [buttonsInfo, setButtonsInfo] = React.useState({
    title: '',
    subtitle: '',
  });
  const [expand, setExpand] = React.useState(false);

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
    <div className='flex flex-col w-full h-full py-5 px-56'>
      {/* title and subtitle */}
      <TitleAndSubtitleContainer
        title={title}
        defaultAnimations={defaultAnimations}
        subtitle={subtitle}
      />

      {/* buttons and chat */}
      <div className='w-4/6 self-center h-2/3 flex flex-col justify-between'>
        <ActionButtons
          setButtonsInfo={setButtonsInfo}
          info={info}
          defaultAnimations={defaultAnimations}
        />
        <InfoContainer
          buttonsInfo={buttonsInfo}
          expand={expand}
          setExpand={setExpand}
        />
      </div>
    </div>
  );
};

export default Home;

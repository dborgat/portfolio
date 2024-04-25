import { motion } from 'framer-motion';
import React from 'react';
import { Icons } from './icons';
import { useTranslations } from 'next-intl';

interface ActionButtonsProps {
  setButtonsInfo: React.Dispatch<
    React.SetStateAction<{ title: string; subtitle: string }>
  >;
  info: string[];
  defaultAnimations: {
    hidden: { opacity: number };
    reveal: { opacity: number };
  };
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  setButtonsInfo,
  info,
  defaultAnimations,
}) => {
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

  return (
    <motion.div className='flex flex-col gap-10' animate={{ y: 10 }}>
      <motion.div
        className='backdrop-contrast-125 w-full rounded-lg p-5 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.span
          className='dark:text-snowWhithe text-delftBlue text-lg'
          initial='hidden'
          whileInView='reveal'
          transition={{ staggerChildren: 0.009 }}
        >
          {info.map((letter, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.01 }}
              variants={defaultAnimations}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
      <motion.div
        className='w-full flex justify-between'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          className='w-1/4 rounded-lg h-52 bg-delftBlue dark:bg-cerulean flex p-5 hover:bg-slateBlue focus:bg-slateBlue dark:hover:bg-charcoal dark:focus:bg-raisinBlack flex-col justify-between'
          onClick={() =>
            handleChat({
              title: t('Buttons.projects.title'),
              subtitle: t('Buttons.projects.subtitle'),
            })
          }
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.projects')}
          </h1>
          <Icons.FolderOpenDot className='w-11 h-11 ml-auto text-frenchGrey' />
        </button>
        <button
          className='rounded-lg h-52 w-1/5 dark:dark:bg-delftBlue bg-gunMetal flex p-5 hover:bg-charcoal dark:hover:bg-slateBlue flex-col justify-between'
          onClick={() =>
            handleChat({
              title: t('Buttons.experience.title'),
              subtitle: t('Buttons.experience.subtitle'),
            })
          }
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.Experience')}
          </h1>
          <Icons.Up className='w-11 h-11 ml-auto text-frenchGrey' />
        </button>
        <button
          className='rounded-lg h-52 w-1/4
     bg-delftBlue dark:bg-cerulean flex p-5 hover:bg-slateBlue dark:hover:bg-charcoal flex-col justify-between'
          onClick={() =>
            handleChat({
              title: t('Buttons.aboutMe.title'),
              subtitle: t('Buttons.aboutMe.subtitle'),
            })
          }
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.aboutMe')}
          </h1>
          <Icons.AboutMe className='w-11 h-11 ml-auto text-frenchGrey' />
        </button>
        <button
          className='rounded-lg h-52 w-1/5 dark:bg-delftBlue bg-gunMetal flex p-5 hover:bg-charcoal dark:hover:bg-slateBlue flex-col justify-between'
          onClick={() =>
            handleChat({
              title: t('Buttons.contact.title'),
              subtitle: t('Buttons.contact.subtitle'),
            })
          }
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.contact')}
          </h1>
          <Icons.Handshake className='w-11 h-11 ml-auto text-frenchGrey' />
        </button>
      </motion.div>
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import React from 'react';
import { Icons } from './icons';
import { useTranslations } from 'next-intl';
import { log } from 'console';
import { Link, useRouter } from '@/navigation';

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

const ActionButtons: React.FC<ActionButtonsProps> = ({
  setButtonsInfo,
  info,
  defaultAnimations,
}) => {
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

  return (
    <motion.div
      className='flex flex-col gap-10'
      animate={{ y: 0 }}
      initial={{ y: 10 }}
    >
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
        className='w-full flex flex-wrap justify-between'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 15 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className='drop-shadow-2xl w-1/4 rounded-lg h-52 bg-delftBlue dark:bg-cerulean flex p-5 hover:bg-slateBlue focus:bg-slateBlue dark:hover:bg-charcoal dark:focus:bg-raisinBlack flex-col justify-between'
          onClick={() => router.push('/projects')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.projects')}
          </h1>
          <Icons.FolderOpenDot className='w-11 h-11 ml-auto text-frenchGrey' />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 15 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className='drop-shadow-2xl rounded-lg h-52 w-1/5 dark:dark:bg-delftBlue bg-gunMetal flex p-5 hover:bg-charcoal dark:hover:bg-slateBlue flex-col justify-between'
          onClick={() => router.push('/experience')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.Experience')}
          </h1>
          <Icons.Up className='w-11 h-11 ml-auto text-frenchGrey' />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 15 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className=' drop-shadow-2xl rounded-lg h-52 w-1/4
     bg-delftBlue dark:bg-cerulean flex p-5 hover:bg-slateBlue dark:hover:bg-charcoal flex-col justify-between'
          onClick={() => router.push('/about')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.aboutMe')}
          </h1>
          <Icons.AboutMe className='w-11 h-11 ml-auto text-frenchGrey' />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 15 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className='drop-shadow-2xl rounded-lg h-52 w-1/5 dark:bg-delftBlue bg-gunMetal flex p-5 hover:bg-charcoal dark:hover:bg-slateBlue flex-col justify-between'
          onClick={() => router.push('/contact')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.contact')}
          </h1>
          <Icons.Handshake className='w-11 h-11 ml-auto text-frenchGrey' />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ActionButtons;

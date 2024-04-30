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
      className='flex flex-col md:gap-10 gap-16'
      animate={{ y: 0 }}
      initial={{ y: 10 }}
    >
      <motion.div
        className='backdrop-contrast-125 w-full rounded-lg md:p-5 p-3 text-center mt-3'
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
        className='w-full flex flex-col justify-between md:flex-row gap-4'
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
          className='drop-shadow-2xl md:w-1/4 rounded-lg md:h-52 h-20 bg-delftBlue dark:bg-cerulean flex md:p-5 p-2 hover:bg-slateBlue focus:bg-slateBlue dark:hover:bg-charcoal dark:focus:bg-raisinBlack md:flex-col justify-between items-center'
          onClick={() => router.push('/projects')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.projects')}
          </h1>
          <Icons.FolderOpenDot className='md:w-11 w-8 md:h-11 h-8 md:ml-auto ml-4 text-frenchGrey' />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 15 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className='drop-shadow-2xl rounded-lg md:h-52 h-20 md:w-1/5 dark:dark:bg-delftBlue bg-gunMetal flex md:p-5 p-2 hover:bg-charcoal dark:hover:bg-slateBlue md:flex-col flex-row-reverse justify-between items-center'
          onClick={() => router.push('/experience')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.Experience')}
          </h1>
          <Icons.Up className='md:w-11 w-8 md:h-11 h-8 md:ml-auto ml-2 text-frenchGrey' />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 15 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className=' drop-shadow-2xl rounded-lg md:h-52 h-20 md:w-1/4
     bg-delftBlue dark:bg-cerulean flex md:p-5 p-2 hover:bg-slateBlue dark:hover:bg-charcoal md:flex-col justify-between items-center'
          onClick={() => router.push('/about')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.aboutMe')}
          </h1>
          <Icons.AboutMe className='md:w-11 w-8 md:h-11 h-8 md:ml-auto ml-4 text-frenchGrey' />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 15 }}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className='drop-shadow-2xl rounded-lg md:h-52 h-20 md:w-1/5 dark:bg-delftBlue bg-gunMetal flex md:p-5 p-2 hover:bg-charcoal dark:hover:bg-slateBlue md:flex-col justify-between flex-row-reverse items-center'
          onClick={() => router.push('/contact')}
        >
          <h1 className='text-frenchGrey text-3xl'>
            {t('Index.mainButtons.contact')}
          </h1>
          <Icons.Handshake className='md:w-11 w-8 md:h-11 h-8 md:ml-auto ml-2 text-frenchGrey' />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ActionButtons;

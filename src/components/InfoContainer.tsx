import { motion } from 'framer-motion';
import React from 'react';
import { Icons } from './icons';
import { useTranslations } from 'next-intl';
import Typewriter from './Typewriter';

interface InfoContainerProps {
  buttonsInfo: {
    title: string;
    subtitle: string;
  };
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const InfoContainer: React.FC<InfoContainerProps> = ({
  buttonsInfo,
  expand,
  setExpand,
}) => {
  return (
    <>
      <motion.div
        className='backdrop-contrast-125 w-2/3 rounded-lg p-5 flex justify-between'
        initial={{ opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
      >
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-4xl dark:text-snowWhithe text-delftBlue'>
            {buttonsInfo.title}
          </span>
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: expand ? '40rem' : '2rem',
              maxHeight: '40rem',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.1,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            key='test'
            className='font-bold overflow-auto w-11/12 text-xl'
          >
            <span className=''>holaaa</span>
          </motion.div>
        </div>
        {expand ? (
          <Icons.ok
            className='w-11 h-11 self-end dark:text-frenchGrey text-delftBlue cursor-pointer'
            onClick={() => setExpand(false)}
          />
        ) : (
          <Icons.send
            className='w-11 h-11 self-end cursor-pointer dark:text-frenchGrey text-delftBlue'
            onClick={() => setExpand(true)}
          />
        )}
      </motion.div>
    </>
  );
};

export default InfoContainer;

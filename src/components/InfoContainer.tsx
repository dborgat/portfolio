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

export const InfoContainer: React.FC<InfoContainerProps> = ({
  buttonsInfo,
  expand,
  setExpand,
}) => {
  return (
    <>
      <motion.div
        className='backdrop-contrast-125 rounded-lg p-5 mb-10 flex justify-between'
        initial={{ opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
      >
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-4xl dark:text-snowWhithe text-delftBlue'>
            {buttonsInfo.title}
          </span>
          {expand && (
            <Typewriter
              text={buttonsInfo.subtitle}
              speed={15}
              className='w-11/12 text-xl dark:text-snowWhithe text-delftBlue after:content-["|"] after:inline-block after:animate-bounce after:duration-700 after:infinite after:ml-1 after:relative after:top-1'
            />
          )}
        </div>
        {expand ? (
          <Icons.ok className='w-11 h-11 self-end dark:text-frenchGrey text-delftBlue' />
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

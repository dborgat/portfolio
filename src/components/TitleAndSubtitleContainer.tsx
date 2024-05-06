import { motion } from 'framer-motion';
import React from 'react';

interface TitleAndSubtitleContainerProps {
  title: string[];
  defaultAnimations: {
    hidden: { opacity: number };
    reveal: { opacity: number };
  };
  subtitle: string[];
}

const TitleAndSubtitleContainer: React.FC<TitleAndSubtitleContainerProps> = ({
  title,
  defaultAnimations,
  subtitle,
}) => {
  return (
    <div className='md:w-4/6 md:self-center'>
      <div className='md:min-h-48 text-center'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='p-5 tracking-tighter  md:text-9xl text-6xl bg-gradient-to-bl from-cardinal to-delftBlue dark:from-snowWhithe dark:to-red text-transparent bg-clip-text inline-block'
        >
          {title}
          {/* {title.map((letter, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.02 }}
              variants={defaultAnimations}
            >
              {letter}
            </motion.span>
          ))} */}
        </motion.h1>
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className='text-eerieBlack dark:text-nonPhotoBlue font-light text-2xl md:text-5xl text-center'
      >
        {subtitle}
      </motion.h1>
    </div>
  );
};

export default TitleAndSubtitleContainer;

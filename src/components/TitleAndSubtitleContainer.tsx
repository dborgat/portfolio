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
    <div className='w-4/6 self-center'>
      <div className='min-h-48 text-center'>
        <motion.h1
          initial='hidden'
          animate='reveal'
          transition={{ staggerChildren: 0.06 }}
          className='p-5 tracking-tighter text-9xl bg-gradient-to-bl from-cardinal to-delftBlue dark:from-snowWhithe dark:to-red text-transparent bg-clip-text inline-block'
        >
          {title.map((letter, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.02 }}
              variants={defaultAnimations}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        className='text-eerieBlack dark:text-nonPhotoBlue font-light text-5xl text-center'
      >
        {subtitle}
      </motion.h1>
    </div>
  );
};

export default TitleAndSubtitleContainer;

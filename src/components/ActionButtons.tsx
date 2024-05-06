import { motion } from 'framer-motion';
import React from 'react';
import { Icons } from './icons';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { buttonsLinks } from '@/utils/constants';
import { View } from 'lucide-react';

interface ActionButtonsProps {
  info: string[];
  defaultAnimations: {
    hidden: { opacity: number };
    reveal: { opacity: number };
  };
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  info,
  defaultAnimations,
}) => {
  const router = useRouter();
  const t = useTranslations('Index.mainButtons');
  const keys = ['projects', 'aboutMe', 'experience', 'contact'] as const;

  return (
    <motion.div
      className='flex flex-col md:gap-10 gap-16'
      animate={{ y: 0 }}
      initial={{ y: -10 }}
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
        {buttonsLinks.map((button, index) => (
          <motion.button
            key={index}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: 'spring', stiffness: 800, damping: 15 }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className={`drop-shadow-2xl md:w-1/4 rounded-lg md:h-52 h-20 bg-delftBlue dark:bg-slateBlue flex p-5 hover:bg-slateBlue focus:bg-slateBlue dark:hover:bg-charcoal dark:focus:bg-raisinBlack md:flex-col ${
              button.mobileReverse && 'flex-row-reverse'
            } justify-between items-center md:items-start`}
            onClick={() => router.push(`${button.link}`)}
          >
            <h1 className='text-frenchGrey text-3xl'>{t(`${keys[index]}`)}</h1>
            {button.icon}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ActionButtons;

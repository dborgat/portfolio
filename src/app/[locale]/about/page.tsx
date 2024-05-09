'use client';
import Biography from '@/components/biography/Biography';
import { Link, useRouter } from '@/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function AboutPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('Buttons.aboutMe');
  const title = t('title').split('');

  const defaultAnimations = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    // <motion.div
    //   animate={{ y: 0 }}
    //   initial={{ y: 15 }}
    //   transition={{ duration: 0.2, ease: 'easeOut' }}
    //   className='md:flex justify-center md:h-4/5'
    // >
    //   <div className='flex md:w-1/2 flex-col gap-16 items-center justify-center p-5'>
    //     <motion.h1
    //       initial='hidden'
    //       animate='reveal'
    //       transition={{ staggerChildren: 0.06 }}
    //       className='p-5 tracking-tighter  md:text-7xl text-6xl bg-gradient-to-bl from-cardinal to-delftBlue dark:from-snowWhithe dark:to-red text-transparent bg-clip-text inline-block text-center'
    //     >
    //       {title.map((letter, index) => (
    //         <motion.span
    //           key={index}
    //           transition={{ duration: 0.02 }}
    //           variants={defaultAnimations}
    //         >
    //           {letter}
    //         </motion.span>
    //       ))}
    //     </motion.h1>
    //     <motion.div
    //       whileHover={{
    //         scale: 1.03,
    //       }}
    //       animate={{ y: 0 }}
    //       initial={{ y: 10 }}
    //       className='backdrop-contrast-125 md:w-2/3 rounded-lg md:p-5 p-3 text-center'
    //     >
    //       <span className='text-xl dark:text-nonPhotoBlue text-nigth'>
    //         {t('subtitle')}
    //       </span>
    //     </motion.div>
    //     <motion.button
    //       whileHover={{
    //         scale: 1.3,
    //       }}
    //       animate={{ y: 0 }}
    //       initial={{ y: 10 }}
    //       className='border dark:text-nonPhotoBlue rounded-md py-3 px-5 my-10 text-xl'
    //       onClick={() => router.push('/contact')}
    //     >
    //       {t('contactButton')}
    //     </motion.button>
    //   </div>
    //   <motion.div
    //     whileHover={{
    //       scale: 1.02,
    //     }}
    //     className='w-1/3 justify-center items-center hidden md:flex'
    //   >
    //     <Image
    //       src='/davor.jpeg'
    //       alt='hero-image'
    //       width={450}
    //       height={120}
    //       className='rounded-md drop-shadow-xl'
    //     />
    //   </motion.div>
    // </motion.div>
    <div className='h-full'>
      <Biography />
    </div>
  );
}

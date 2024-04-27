'use client';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const TransitionProvides: React.FC<Props> = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div
        key={pathName}
        className='w-screen h-screen bg-gradient-to-bl from-frenchGrey via-frenchGrey to-slateBlue dark:from-delftBlue dark:to-nigth'
      >
        {/* <motion.div
          className='h-screen w-screen fixed bg-charcoal rounded-md z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '100vh' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        ></motion.div> */}
        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvides;

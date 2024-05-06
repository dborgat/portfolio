'use client';
import { useRouter } from '@/navigation';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { usePathname } from '../navigation';

interface SidebarProps {
  // Define any props you need for the sidebar component
}

const Navbar: React.FC<SidebarProps> = () => {
  const router = useRouter();
  const locale = useLocale();
  // When the user is on `/en`, this will be `/`
  const pathname = usePathname();

  const [isChecked, setIsChecked] = useState(true);
  const [isBig, setIsBig] = useState(false);

  {
    /* toggle dark mode*/
  }
  useEffect(() => {
    if (isChecked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isChecked]);

  const handleChangeIsDarkMode = () => {
    setIsChecked(!isChecked);
  };

  const handleLocalChange = () => {
    router.replace(`${pathname}`, { locale: locale === 'es' ? 'en' : 'es' });
  };

  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -10 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20'
    >
      <div className='flex items-center text-snowWhithe'>
        <Link href={`/${locale}`} passHref>
          <span className='text-xl bg-gradient-to-bl from-cardinal to-delftBlue dark:from-slateBlue dark:to-cardinal text-bg-frenchGrey px-1 py-2 rounded-md'>
            {'<DB/>'}
          </span>
        </Link>
      </div>
      {/* toggle dark mode*/}
      <div className='flex items-center gap-4'>
        <Link href='https://github.com/dborgat' target='_blank'>
          <Image
            src='/github.png'
            alt='github icon'
            width={35}
            height={35}
            priority
          />
        </Link>
        <Link href='https://www.linkedin.com/in/david-borgat' target='_blank'>
          <Image
            src='/linkedin.png'
            alt='linkedin icon'
            width={35}
            height={35}
            priority
          />
        </Link>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleChangeIsDarkMode}
          className='relative appearance-none inline-block md:w-9 md:h-9 w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute md:after:top-1 after:top-2 md:after:left-1 after:left-2 md:after:h-7 after:h-8 after:w-8 md:after:w-7 after:rounded-md after:shadow-sm  
        after:bg-moon checked:after:bg-sun bg-eerieBlack checked:bg-oldGold'
        />
        <div className='flex gap-3 items-center text-snowWhithe'>
          <input
            type='checkbox'
            checked={locale === 'es'}
            onChange={handleLocalChange}
            className='relative appearance-none inline-block md:w-12 md:h-9 w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute md:after:top-0.5 after:top-2  after:left-1 md:after:h-7 after:h-3/4 after:w-1/2 md:after:w-7 after:rounded-md after:shadow-sm after:font-bold after:p-1 dark:bg-slateBlue bg-nigth
          after:content-["ESP"] checked:after:content-["ENG"]'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

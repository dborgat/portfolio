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

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const handleLocalChange = () => {
    router.replace(`${pathname}`, { locale: locale === 'es' ? 'en' : 'es' });
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20'>
      <div className='flex gap-3 items-center text-snowWhithe'>
        <input
          type='checkbox'
          checked={locale === 'es'}
          onChange={handleLocalChange}
          className='relative appearance-none inline-block w-12 h-9 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-0.5 after:left-1 after:h-7 after:w-7 after:rounded-md after:shadow-sm after:font-bold after:p-1 dark:bg-taupe bg-delftBlue
          after:content-["ESP"] checked:after:content-["ENG"] checked:bg-oldGold'
        />
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
          className='relative appearance-none inline-block w-9 h-9 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-1 after:left-1 after:h-7 after:w-7 after:rounded-md after:shadow-sm  
        after:bg-moon checked:after:bg-sun bg-eerieBlack checked:bg-oldGold'
        />
      </div>
      {/* menu button responsive */}
      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col justify-between'>
          <div className='w-10 h-1 rounded bg-nigth'></div>
          <div className='w-10 h-1 rounded bg-nigth'></div>
          <div className='w-10 h-1 rounded bg-nigth'></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

interface SidebarProps {
  // Define any props you need for the sidebar component
}

const Navbar: React.FC<SidebarProps> = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isChecked, setIsChecked] = useState(true);

  {
    /* toggle dark mode*/
  }
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      setIsChecked(false);
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleChangeIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setIsChecked(!isChecked);
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20'>
      <LocaleSwitcherSelect />
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
        after:bg-sun checked:after:bg-moon checked:bg-eerieBlack bg-oldGold'
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

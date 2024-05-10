'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { usePathname } from '../navigation';
import { useRouter } from '@/navigation';

import { navbarData } from '@/utils/constants';

const Header: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  // When the user is on `/en`, this will be `/`
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const t = useTranslations('Index.mainButtons');

  useEffect(() => {
    if (isChecked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isChecked]);

  const handleLocalChange = () => {
    router.replace(`${pathname}`, { locale: locale === 'es' ? 'en' : 'es' });
  };

  const handleChangeIsDarkMode = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className='top-5 left-12 md:left-20 lg:left-28 xl:left-40 z-50 w-5/6 fixed lg:top-4 bg-nigth rounded-lg shadow-xl px-4 py-3'>
      <nav
        className={clsx(
          'flex justify-end md:text-2xl font-sans font-bold text-lg',
          pathname !== `/` && 'justify-between'
        )}
      >
        <Link
          href={`/${locale}`}
          passHref
          className={clsx('flex items-center', pathname === `/` && 'hidden')}
        >
          <h1 className='text-pumpkin'>David Borgat</h1>
        </Link>
        <button
          aria-expanded={open}
          aria-label='Open menu'
          className='block p-2 text-2xl text-slate-800 xl:hidden'
          onClick={() => setOpen(true)}
        >
          <AlignJustify color='#FA8334' size={30} />
        </button>
        <div
          className={clsx(
            'fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center h-2/5 rounded-b-lg gap-4 pr-10 pt-24 transition-transform duration-300 ease-in-out xl:hidden bg-nigth shadow-xl',
            open ? 'translate-x-0' : 'translate-x-[100%]'
          )}
        >
          <button
            aria-label='Close menu'
            aria-expanded={open}
            className='fixed right-12 top-8 block p-2 text-2xl xl:hidden'
            onClick={() => setOpen(false)}
          >
            <X color='#FA8334' size={40} />
          </button>
          <ul className='w-2/5 grid grid-rows-3 gap-y-6 place-content-center'>
            <li
              className={'flex font-semibold text-3xl'}
              onClick={() => setOpen(false)}
            >
              <Link href={`/${locale}/about`} passHref>
                <span
                  className={clsx(
                    'text-pumpkin',
                    pathname === '/about' && 'border-b-2 border-b-pumpkin'
                  )}
                >
                  {t('aboutMe')}
                </span>
              </Link>
            </li>
            <li
              className={'flex font-semibold text-3xl'}
              onClick={() => setOpen(false)}
            >
              <Link href={`/${locale}/projects`} passHref>
                <span
                  className={clsx(
                    'text-pumpkin',
                    pathname === '/projects' && 'border-b-2 border-b-pumpkin'
                  )}
                >
                  {t('projects')}
                </span>
              </Link>
            </li>
            <li
              className={'flex font-semibold text-3xl'}
              onClick={() => setOpen(false)}
            >
              <Link href={`/${locale}/contact`} passHref>
                <span
                  className={clsx(
                    'text-pumpkin',
                    pathname === '/contact' && 'border-b-2 border-b-pumpkin'
                  )}
                >
                  {t('contact')}
                </span>
              </Link>
            </li>
            <li className='flex justify-between md:hidden'>
              <input
                type='checkbox'
                checked={locale === 'es'}
                onChange={handleLocalChange}
                className='relative appearance-none inline-block md:w-12 md:h-9 w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute md:after:top-0.5 after:top-2  after:left-1 md:after:h-7 after:h-3/4 after:w-1/2 md:after:w-7 after:rounded-md after:shadow-sm after:font-bold after:p-1 bg-pumpkin
          after:content-["ESP"] checked:after:content-["ENG"]'
              />
              <input
                type='checkbox'
                checked={isChecked}
                onChange={handleChangeIsDarkMode}
                className='relative appearance-none inline-block md:w-9 md:h-9 w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute md:after:top-1 after:top-2 md:after:left-1 after:left-2 md:after:h-7 after:h-8 after:w-8 md:after:w-7 after:rounded-md after:shadow-sm  
        after:bg-moon checked:after:bg-sun bg-eerieBlack checked:bg-oldGold'
              />
            </li>
          </ul>
        </div>
        <ul className='xl:flex flex-row justify-between xl:w-3/6 2xl:w-2/5 p-1 hidden'>
          <li
            className={
              'group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-nigth px-4 py-2 font-semibold transition-transform ease-out hover:scale-105'
            }
          >
            <Link href={`/${locale}/about`} passHref>
              <span className='absolute inset-0 z-0 h-full translate-y-11 bg-battleshipGrey transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
              <span className='relative flex items-center justify-center gap-2 text-pumpkin'>
                {t('aboutMe')}
              </span>
            </Link>
          </li>
          <li
            className={
              'group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-nigth px-4 py-2 font-semibold transition-transform ease-out hover:scale-105'
            }
          >
            <Link href={`/${locale}/projects`} passHref>
              <span className='absolute inset-0 z-0 h-full translate-y-11 bg-slateBlue transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
              <span className='relative flex items-center justify-center gap-2 text-pumpkin'>
                {t('projects')}
              </span>
            </Link>
          </li>
          <li
            className={
              'group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-nigth px-4 py-2 font-semibold transition-transform ease-out hover:scale-105'
            }
          >
            <Link href={`/${locale}/contact`} passHref>
              <span className='absolute inset-0 z-0 h-full translate-y-11 bg-cardinal transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
              <span className='relative flex items-center justify-center gap-2 text-pumpkin'>
                {t('contact')}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

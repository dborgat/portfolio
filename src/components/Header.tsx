'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from '../navigation';
import { useRouter } from '@/navigation';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const Header: React.FC = () => {
  const component = useRef(null);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const t = useTranslations('Index.mainButtons');

  const handleLocalChange = () => {
    router.replace(`${pathname}`, { locale: locale === 'es' ? 'en' : 'es' });
  };

  const handleGoBack = () => {
    if (pathname === '/') {
      return;
    }
    router.back();
  };

  useGSAP(
    () => {
      gsap.fromTo(
        '.header',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'elastic.out(1,0.4)',
          duration: 1,
        }
      );
    },
    { scope: component }
  );

  return (
    <div ref={component}>
      <div className='header opacity-0'>
        <div className='flex flex-row justify-between px-5'>
          {pathname !== `/` && (
            <div
              onClick={handleGoBack}
              className='relative appearance-none inline-block w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-0 after:shadow-sm after:font-bold bg-pumpkin
          after:content-["<"] after:text-5xl after:left-[0.6rem] md:hidden'
            />
          )}
          <input
            type='checkbox'
            checked={locale === 'es'}
            onChange={handleLocalChange}
            className='relative appearance-none inline-block w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-2  after:left-0.4 md:after:h-7 after:h-3/4 after:w-1/2 after:rounded-md after:shadow-sm after:font-bold after:p-1 bg-pumpkin
        after:content-["ESP"] checked:after:content-["ENG"] after:text-xl md:hidden'
          />
        </div>
        <header className='top-5 left-12 hidden md:block md:left-20 lg:left-28 xl:left-40 z-50 w-5/6 fixed lg:top-4 bg-nigth rounded-lg shadow-xl px-4 py-3'>
          <nav
            className={clsx(
              'flex justify-end md:text-2xl font-sans font-bold text-lg',
              pathname !== `/` && 'justify-between'
            )}
          >
            <Link
              href={`/${locale}`}
              passHref
              className={clsx(
                'flex items-center',
                pathname === `/` && 'hidden'
              )}
            >
              <h1 className='text-pumpkin'>David Borgat</h1>
            </Link>
            <button
              aria-expanded={open}
              aria-label='Open menu'
              className='block p-2 text-2xl text-slate-800 md:hidden'
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
                        pathname === '/projects' &&
                          'border-b-2 border-b-pumpkin'
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
                <li>
                  <input
                    type='checkbox'
                    checked={locale === 'es'}
                    onChange={handleLocalChange}
                    className='relative appearance-none inline-block w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-2  after:left-0.4 md:after:h-7 after:h-3/4 after:w-1/2 after:rounded-md after:shadow-sm after:font-bold after:p-1 bg-pumpkin
          after:content-["ESP"] checked:after:content-["ENG"] after:text-8xl md:hidden'
                  />
                </li>
              </ul>
            </div>
            <ul className='md:flex flex-row justify-between lg:w-4/6 2xl:w-2/5 p-1 hidden'>
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
      </div>
    </div>
  );
};

export default Header;

'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useRef } from 'react';
import clsx from 'clsx';
import { usePathname } from '../navigation';
import { useRouter } from '@/navigation';
import { headerRouter } from '@/utils/constants';

const Header: React.FC = () => {
  const component = useRef(null);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const keys = ['aboutMe', 'projects', 'contact'] as const;

  const t = useTranslations('Index');

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
        <div className='flex flex-row justify-between px-5 lg:hidden'>
          {pathname !== `/` && (
            <button
              onClick={handleGoBack}
              className='w-12 h-12 rounded-md shadow-md font-semibold text-4xl grid content-start bg-pumpkin '
            >
              {`<`}
            </button>
          )}
          <input
            type='checkbox'
            checked={locale === 'es'}
            onChange={handleLocalChange}
            className='relative appearance-none inline-block w-12 h-12 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-2  after:left-0.4 md:after:h-7 after:h-3/4 after:w-1/2 after:rounded-md after:shadow-sm after:font-bold after:p-1 bg-pumpkin
        after:content-["ESP"] checked:after:content-["ENG"] after:text-xl lg:hidden'
          />
        </div>
        <header className='top-5 left-12 hidden lg:block md:left-20 lg:left-28 xl:left-40 z-50 w-5/6 fixed lg:top-4 bg-nigth rounded-lg shadow-xl px-4 py-3'>
          <nav
            className={clsx(
              'flex justify-center md:text-2xl font-sans font-bold text-lg',
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
            <ul className='md:flex md:w-full flex-row justify-between lg:w-4/6 2xl:w-2/5 p-1 hidden'>
              {headerRouter.map(({ color, link }, index) => (
                <li
                  className={
                    'group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-nigth px-4 py-2 font-semibold transition-transform ease-out hover:scale-105'
                  }
                  key={index}
                >
                  <Link href={`/${locale}${link}`} passHref>
                    <span
                      className={clsx(
                        `absolute inset-0 z-0 h-full translate-y-11 bg-${color} transition-transform duration-300 ease-in-out group-hover:translate-y-0`
                      )}
                    ></span>
                    <span className='relative flex items-center justify-center gap-2 text-pumpkin'>
                      {t(`mainButtons.${keys[index]}`)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;

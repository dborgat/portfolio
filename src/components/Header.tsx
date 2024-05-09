import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  const locale = useLocale();
  return (
    <header className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 bg-slateBlue rounded-lg px-4 py-3'>
      <nav className='flex justify-between text-2xl'>
        <Link href={`/${locale}`} passHref>
          <h1>David Borgat</h1>
        </Link>
        <ul className='flex flex-row justify-between w-1/4'>
          <li>
            <Link href={`/${locale}/about`} passHref>
              <h1>About</h1>
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/projects`} passHref>
              Projects
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/contact`} passHref>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

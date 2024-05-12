import { Icons } from '@/utils/icons';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export const MobileMenu = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className='mobile-menu opacity-0 size-auto m-auto mt-14 grid gap-10 py-5 lg:hidden'>
      <Link href={`/${locale}/about`} passHref>
        <div
          className={
            'font-semibold text-6xl text-pumpkin flex flex-row justify-between items-center'
          }
        >
          <span>{t('Index.mainButtons.aboutMe')}</span>
          {<Icons.AboutMe size={48} />}
        </div>
      </Link>
      <Link href={`/${locale}/projects`} passHref>
        <div
          className={
            'font-semibold text-6xl text-pumpkin flex flex-row justify-between items-center'
          }
        >
          {t('Index.mainButtons.projects')}
          {<Icons.FolderOpenDot size={48} />}
        </div>
      </Link>
      <Link href={`/${locale}/contact`} passHref>
        <div
          className={
            'font-semibold text-6xl text-pumpkin flex flex-row justify-between items-center'
          }
        >
          {t('Index.mainButtons.contact')}
          {<Icons.Handshake size={48} />}
        </div>
      </Link>
      <Link href='https://github.com/dborgat' passHref>
        <div
          className={
            'font-semibold text-6xl text-pumpkin flex flex-row justify-between items-center'
          }
        >
          {t('Index.mainButtons.github')}
          {<Icons.GitMerge size={48} />}
        </div>
      </Link>
      <Link href='https://www.linkedin.com/in/david-borgat' passHref>
        <div
          className={
            'font-semibold text-6xl text-pumpkin flex flex-row justify-between items-center'
          }
        >
          {t('Index.mainButtons.linkedin')}
          {<Icons.Linkedin size={48} />}
        </div>
      </Link>
    </div>
  );
};

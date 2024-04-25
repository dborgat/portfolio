import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const LocaleSwitcherSelect = () => {
  const locale = useLocale();
  const router = useRouter();

  const handleLocalChange = () => {
    document.cookie = `NEXT_LOCALE=${locale === 'es' ? 'en' : 'es'}`;
    router.refresh();
  };

  return (
    <div className='flex gap-3 items-center text-snowWhithe'>
      <input
        type='checkbox'
        checked={locale === 'es'}
        onChange={handleLocalChange}
        className='relative appearance-none inline-block w-16 h-9 cursor-pointer rounded-md shadow-lg transitions-all after:absolute after:top-1 after:left-1 after:h-7 after:w-7 after:rounded-md after:shadow-sm after:transition-all checked:after:translate-x-5 after:content-["ESP"] checked:after:content-["ENG"] after:font-bold after:p-0.5 dark:bg-taupe bg-delftBlue'
      />
    </div>
  );
};

export default LocaleSwitcherSelect;

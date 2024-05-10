'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from '../../navigation';
import { useRouter } from '@/navigation';

type Props = {
  locale: string;
};

const StickyButtons: React.FC<Props> = ({ locale }) => {
  const router = useRouter();
  // When the user is on `/en`, this will be `/`
  const pathname = usePathname();

  const handleLocalChange = () => {
    router.replace(`${pathname}`, { locale: locale === 'es' ? 'en' : 'es' });
  };

  return (
    <div className='fixed inset-y-96 right-5 bg-nigth p-4 h-48 z-50 rounded-lg hidden md:flex flex-col justify-between'>
      <input
        type='checkbox'
        checked={locale === 'es'}
        onChange={handleLocalChange}
        className='relative appearance-none inline-block w-12 h-9 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-0.5 after:left-0.5 after:h-7 after:w-1/2 after:rounded-md after:shadow-sm after:font-bold after:p-1 bg-slateBlue
    after:content-["ESP"] checked:after:content-["ENG"] after:text-xl'
      />
      <div className='bg-slateBlue grid justify-center rounded-md p-1'>
        <Link href='https://github.com/dborgat' target='_blank'>
          <Image
            src='/github.png'
            alt='github icon'
            width={40}
            height={35}
            priority
          />
        </Link>
      </div>
      <div className=' grid justify-center rounded-md'>
        <Link href='https://www.linkedin.com/in/david-borgat' target='_blank'>
          <Image
            src='/linkedin.png'
            alt='linkedin icon'
            width={45}
            height={35}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default StickyButtons;

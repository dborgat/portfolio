'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from '../../navigation';
import { useRouter } from '@/navigation';
import { Icons } from '../../utils/icons';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

type Props = {
  locale: string;
};

const StickyButtons: React.FC<Props> = ({ locale }) => {
  const component = useRef(null);
  const router = useRouter();
  // When the user is on `/en`, this will be `/`
  const pathname = usePathname();

  const handleLocalChange = () => {
    router.replace(`${pathname}`, { locale: locale === 'es' ? 'en' : 'es' });
  };

  useGSAP(
    () => {
      gsap.fromTo(
        '.stickyButtons',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
        }
      );
    },
    { scope: component }
  );

  return (
    <div ref={component}>
      <div className='fixed inset-y-96 right-5 bg-nigth p-4 h-60 z-50 rounded-lg hidden lg:flex flex-col justify-between opacity-0 stickyButtons'>
        <input
          type='checkbox'
          checked={locale === 'es'}
          onChange={handleLocalChange}
          className='relative appearance-none inline-block w-12 h-9 cursor-pointer rounded-md shadow-md transitions-all after:absolute after:top-0.5 after:left-0.5 after:h-7 after:w-1/2 after:rounded-md after:shadow-sm after:font-bold after:p-1 bg-slateBlue
    after:content-["ESP"] checked:after:content-["ENG"] after:text-xl'
        />
        <div className=' grid justify-center rounded-md p-1 bg-slateBlue'>
          <Link href='/' download='/davor2.jpeg'>
            <Icons.FileInput size={40} />
          </Link>
        </div>
        <div className='bg-slateBlue grid justify-center rounded-md p-1'>
          <Link href='https://github.com/dborgat' target='_blank'>
            <Image
              src='/github.png'
              alt='github icon'
              width={40}
              height={40}
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
              height={45}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyButtons;

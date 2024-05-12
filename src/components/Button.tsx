import clsx from 'clsx';
import React from 'react';
import { Download, SquareArrowOutUpRight } from 'lucide-react';

type ButtonProps = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        'group relative flex lg:w-2/3 xl:w-1/3 items-center justify-center overflow-hidden rounded-md border-2 border-nigth bg-nonPhotoBlue px-5 py-2 font-semibold transition-transform ease-out hover:scale-105',
        className
      )}
    >
      <span className='absolute inset-0 z-0 h-full translate-y-9 bg-oldGold transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
      <span className='relative flex items-center justify-center gap-2 text-xl'>
        {text}
        <Download />
      </span>
    </button>
  );
}

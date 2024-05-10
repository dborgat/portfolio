'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';
import Bounded from '@/components/Bounded';

export default function ContactPage() {
  const [emailErrorMsg, setEmailErrorMsg] = useState({
    error: false,
    success: false,
  });
  const t = useTranslations('Buttons.contact');
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailErrorMsg({ error: false, success: false });

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setEmailErrorMsg({ error: false, success: true });
            if (form.current) {
              (form.current as HTMLFormElement).reset();
            }
          },
          (e) => {
            console.error(e);
            setEmailErrorMsg({ error: true, success: false });
          }
        );
    }
  };

  return (
    <Bounded>
      <div className='grid gap-x-8 gap-y-3 grid-cols-1 justify-items-center'>
        <Heading as='h1' size='lg' className='text-center text-pumpkin mt-5'>
          {t('title')}
        </Heading>

        <div className='md:w-2/3 p-3 text-center md:mt-0'>
          <span className='prose prose-2xl prose-slate prose-invert col-start-1 grid gap-2 lg:p-0 p-2'>
            {t('subtitle')}
          </span>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col gap-8 w-full mb-5 bg-nigth md:w-2/3 rounded-lg px-5 pt-5 pb-3 md:px-14 md:pt-14 md:pb-4 text-xl dark:text-pumpkin text-nigth'
        >
          <span>{t('mailTitle')}</span>
          <textarea
            rows={2}
            className='bg-transparent border-b-2 dark:border-b-pumpkin border-b-nigth outline-none resize-none'
            name='user_message'
          />
          <span>{t('mailSender')}</span>
          <input
            name='user_email'
            type='email'
            className='bg-transparent border-b-2 dark:border-b-pumpkin border-b-nigth outline-none'
          />
          <span>{t('mailEnd')}</span>
          <button className='font-semibold border-2 dark:border-pumpkin border-nigth text-nigth dark:text-pumpkin p-2 rounded-lg md:w-1/5 md:self-center'>
            {t('sendButton')}
          </button>
          <span>
            {emailErrorMsg.error && t('emailErrorFeedback')}
            {emailErrorMsg.success && t('emailOkFeedback')}
          </span>
        </form>
      </div>
    </Bounded>
  );
}

'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

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
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: 10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className='flex flex-col items-center gap-10 p-5'
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.06 }}
        className='p-5 tracking-tighter md:text-7xl text-6xl bg-gradient-to-bl from-cardinal to-delftBlue dark:from-snowWhithe dark:to-red text-transparent bg-clip-text inline-block'
      >
        {t('title')}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='backdrop-contrast-125 md:w-2/3 rounded-lg md:p-5 p-3 text-center mt-10 md:mt-0'
      >
        <span className='text-xl dark:text-nonPhotoBlue text-nigth'>
          {t('subtitle')}
        </span>
      </motion.div>
      <motion.form
        whileHover={{
          scale: 1.02,
        }}
        ref={form}
        onSubmit={sendEmail}
        className='flex flex-col gap-8 mt-5 w-full backdrop-contrast-150 md:w-2/3 rounded-lg px-5 pt-5 pb-3 md:px-14 md:pt-14 md:pb-4 text-xl dark:text-nonPhotoBlue text-nigth'
      >
        <span>{t('mailTitle')}</span>
        <textarea
          rows={2}
          className='bg-transparent border-b-2 dark:border-b-nonPhotoBlue border-b-nigth outline-none resize-none'
          name='user_message'
        />
        <span>{t('mailSender')}</span>
        <input
          name='user_email'
          type='email'
          className='bg-transparent border-b-2 dark:border-b-nonPhotoBlue border-b-nigth outline-none'
        />
        <span>{t('mailEnd')}</span>
        <button className='font-semibold border-2 dark:border-nonPhotoBlue border-nigth text-nigth dark:text-nonPhotoBlue p-2 rounded-lg md:w-1/5 md:self-center'>
          {t('sendButton')}
        </button>
        <span>
          {emailErrorMsg.error && t('emailErrorFeedback')}
          {emailErrorMsg.success && t('emailOkFeedback')}
        </span>
      </motion.form>
    </motion.div>
  );
}

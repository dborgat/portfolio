import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function ProjectsPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('Buttons.aboutMe');

  return (
    <div className='max-w-[490px]'>
      {t('title')}
      <Link href='/'>Home</Link>
    </div>
  );
}

import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { dashboardWebsite } from '@/config';
import { Link } from '@/navigation';
import MySvg from './my-svg';
import '@/styles/common.scss';

export default function StartNow() {
  const t = useTranslations();
  return (
    <div className="start-now ipad:flex flex-col items-center hidden">
      <MySvg src="/assets/icons/logo-lg.svg" />
      <MySvg src="/assets/icons/logo-text-lg.svg" />

      <div className="mt-4 text-center">
        <span className="text-[var(--text-color-3)] text-base">{t('startNow.title')}</span>
      </div>

      <div className="mt-6">
        <Link href={dashboardWebsite + 'account/register'} target="__blank">
          <Button className="min-w-[136px] h-[46px] px-2 text-lg border bg-[var(--primary-color)] text-white">
            {t('start-now')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import MySvg from '@/components/my-svg';

export default function HeadAd() {
  const t = useTranslations();
  function onIconClick(link: string) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${baseUrl}/links/${link}`;
    window.open(url, '_blank');
  }

  return (
      <div className="ipad:block hidden fixed top-0 left-0 w-full h-[52px] bg-[#F9DD34] z-[1001]">
        <div className="flex items-center justify-center gap-[80px] h-[52px] px-10">
          <div className="flex items-center gap-2">
            <p className="text-lg text-[var(--text-color-1)] font-semibold">{t('common.ad')}</p>
            {/* <div className="px-4 py-1 text-sm font-medium text-[var(--text-color-1)] rounded border border-solid border-[var(--text-color-1)] cursor-pointer">
              {t('common.adBtn')}
            </div> */}
          </div>

          <div className="flex items-center gap-3">
            <div
              className='cursor-pointer'
              onClick={e => {
                onIconClick('telegram');
              }}>
              <MySvg src="/assets/icons/tg-black.svg" />
            </div>

            <div
              className='cursor-pointer'
              onClick={e => {
                onIconClick('discord');
              }}>
              <MySvg src="/assets/icons/discord-black.svg" />
            </div>
          </div>
        </div>
      </div>
  );
}

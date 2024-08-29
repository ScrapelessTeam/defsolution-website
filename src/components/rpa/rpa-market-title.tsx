import { useTranslations } from 'next-intl';

export default function RpaMarketTitle() {
  const t = useTranslations();

  return (
    <div>
      <h1 className="text-center text-h1 ipad:text-[40px] iph:text-[32px] text-[24px] font-semibold leading-[38px]">
        {t('rpa.store.storeTitle')}
      </h1>
      <h2 className="text-title-desc ipad:text-[20px] iph:text-[16px] text-[15px] mt-4">{t('rpa.store.subTitle')}</h2>
    </div>
  );
}

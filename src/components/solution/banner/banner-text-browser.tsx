import { useTranslations } from 'next-intl';

export default function BannerTextBrowser() {
  const t = useTranslations();
  return (
    <div>
      <h1 className="text-h1 ipad:mx-0 mx-auto ipad:text-left text-center ipad:text-[40px] iph:text-[32px] text-[24px] ipad:w-[568px]">
        {t('solution.title.fingerprint-browser')}
      </h1>
      <p className="text-title-desc ipad:text-left text-center ipad:mx-0 mx-auto mt-4 ipad:text-[20px] iph:text-[16px] text-[15px] ipad:w-[568px]">
        {t('solution.desc.fingerprint-browser')}
      </p>
    </div>
  );
}

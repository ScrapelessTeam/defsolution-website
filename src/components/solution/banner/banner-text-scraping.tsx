import { useTranslations } from 'next-intl';

export default function BannerTextScraping() {
  const t = useTranslations();
  return (
    <div>
      <h1 className="text-h1 ipad:mx-0 mx-auto ipad:text-left text-center ipad:text-[40px] iph:text-[32px] text-[24px] ipad:w-[577px]">
        {t('solution.title.scraping')}
      </h1>
      <p className="text-title-desc ipad:text-left text-center ipad:mx-0 mx-auto mt-4 ipad:text-[20px] iph:text-[16px] text-[15px] ipad:w-[577px]">
        {t('solution.desc.scraping')}
      </p>
    </div>
  );
}

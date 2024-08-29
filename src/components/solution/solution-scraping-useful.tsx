import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SolutionScrapingUseful() {
  const t = useTranslations();
  const data = [
    {
      iconType: 'png',
      title: t('solution.scrap.useful.title1'),
      desc: t('solution.scrap.useful.desc1'),
      icons: ['amazon', 'shopify', 'eBay', 'al', 'walmart'],
    },
    {
      iconType: 'jpg',
      title: t('solution.scrap.useful.title2'),
      desc: t('solution.scrap.useful.desc2'),
      icons: ['market'],
    },
    {
      iconType: 'jpg',
      title: t('solution.scrap.useful.title3'),
      desc: t('solution.scrap.useful.desc3'),
      icons: ['meta', 'ins', 'tiktok', 'youtube'],
    },
    {
      iconType: 'jpg',
      title: t('solution.scrap.useful.title4'),
      desc: t('solution.scrap.useful.desc4'),
      icons: ['google', 'semrush', 'Ahrefs'],
    },
  ];

  return (
    <div className="bg-[var(--bg-primary)] ipad:py-[120px] iph:py-[60px] py-[40px]">
      <div className="mx-auto container">
        <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl text-center mx-auto ipad:w-[571px]">
          {t('solution.scrap.useful.title')}
        </h2>

        <div className="flex flex-wrap ipad:gap-6 gap-3 justify-center ipad:mt-10 iph:mt-5 mt-4">
          {data.map((d, i) => {
            return (
              <div
                key={i}
                className="border border-solid border-[var(--border-color)] rounded-xl p-4 w-[278px] flex flex-col justify-between">
                <p className="ipad:text-xl iph:text-base text-[15px] font-semibold text-[var(--text-color-1)] leading-[28px] ipad:min-h-[56px]">
                  {d.title}
                </p>

                <p className="pt-3 text-sm font-normal text-[var(--text-color-4)]">{d.desc}</p>

                <div className="flex gap-2 ipad:mt-[40px] iph:mt-[20px] mt-[16px]">
                  {d.icons.map((icon, i) => {
                    return (
                      <div key={i} className="w-[32px] h-[32px] rounded-[8px]">
                        <Image
                          src={`/assets/images/solution/scraping/${icon}.${d.iconType}`}
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

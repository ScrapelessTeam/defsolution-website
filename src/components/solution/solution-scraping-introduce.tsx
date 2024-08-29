import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { Link } from '@/navigation';

export default function SolutionScrapingIntroduce() {
  const t = useTranslations();
  return (
    <div className="bg-[var(--bg-primary)] ipad:pb-[120px] iph:pb-[60px] pb-[40px]">
      <div className="mx-auto container">
        <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl text-center mx-auto ipad:w-[571px]">
          {t('solution.scrap.introductTitle')}
        </h2>
        <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mt-3 text-center">
          {t('solution.scrap.introduceDesc')}
        </p>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
              {t('solution.scrap.introduce1')}
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.scrap.introduceDesc1')}
            </p>
          </div>

          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image src="/assets/images/solution/scraping-1.png" alt="" fill />
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image src="/assets/images/solution/scraping-2.png" alt="" fill />
          </div>
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('solution.scrap.introduce2')}
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.scrap.introduceDesc2')}
            </p>
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
              {t('solution.scrap.introduce3')}
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.scrap.introduceDesc3')}
            </p>
          </div>

          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image src="/assets/images/solution/scraping-3.png" alt="" fill />
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image src="/assets/images/solution/scraping-4.png" alt="" fill />
          </div>
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('solution.scrap.introduce4')}
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.scrap.introduceDesc4')}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center ipad:mt-[48px] iph:mt-[24px] mt-4">
          <Link href="/pricing">
            <Button
              className="min-w-[152px] h-[46px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
              color="primary">
              <div className="flex gap-3">
                <span>Pricing</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

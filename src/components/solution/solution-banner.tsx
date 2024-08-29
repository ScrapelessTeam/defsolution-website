import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { combineClasses } from '@/lib/utils';
import { Link } from '@/navigation';
import MySvg from '@/components/my-svg';
import BannerTextScraping from './banner/banner-text-scraping';

import BannerImgScraping from './banner/banner-img-scraping';

import '@/styles/common.scss';

export default function SolutionBanner() {
  const $t = useTranslations();

  return (
    <div className="ipad:pt-[109px] pt-[57px] relative bg-[var(--bg-color)]">
      <div
        className={combineClasses(
          'mx-auto container ipad:pt-[60px] ipad:min-h-[540px] iph:pt-[30px] pt-[20px] relative',
          'iph:min-h-[448px] min-h-[335px]',
        )}>
        <div className="flex flex-col justify-center ipad:min-h-[480px] iph:min-h-[176px] min-h-[246px]">
          <BannerTextScraping />

          <div className="flex items-center ipad:justify-start justify-center flex-wrap ipad:mt-[48px] iph:mt-[24px] mt-[16px] gap-2">
            <Link href="/pricing">
              <Button
                className="ipad:min-w-[152px] min-w-[244px] h-[46px] px-2 ipad:text-lg iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
                color="primary">
                Pricing
              </Button>
            </Link>
          </div>
        </div>
        <BannerImgScraping />
      </div>
    </div>
  );
}

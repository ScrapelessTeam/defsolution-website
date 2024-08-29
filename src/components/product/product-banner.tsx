import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { dashboardWebsite, docsWebsite, productList } from '@/config';
import { Link } from '@/navigation';
import MySvg from '@/components/my-svg';
import '@/styles/common.scss';

export default function ProductBanner() {
  const t = useTranslations('product');
  const $t = useTranslations();

  const imageStyleList = {
    browserless: {
      width: 1200,
      height: 714,
    }
  };

  function getImageStyle() {
    return imageStyleList['browserless'];
  }

  const imageStyles = {
    width: getImageStyle().width,
    height: getImageStyle().height,
  };

  return (
    <div className="ipad:pt-[109px] pt-[57px] relative">
      <div className="iph:w-[629px] w-[300px] iph:h-[629px] h-[300px] iph:rounded-[629px] rounded-[300px] purple-bg-lg absolute top-[234px] -left-[125px]"></div>
      <div className="iph:w-[629px] w-[311px] iph:h-[629px] h-[311px] iph:rounded-[629px] rounded-[311px] yellow-bg-lg absolute -top-[146px] right-[0]"></div>

      <div className="mx-auto container ipad:pt-[80px] iph:pt-[40px] pt-[26px] relative ipad:min-h-[710px] iph:min-h-[660px] min-h-[530px]">
        <h1 className="text-h1 mx-auto text-center relative z-10 ipad:text-[40px] iph:text-[32px] text-[24px]">
          {t(`title.browserless`)}
        </h1>
        <p className="text-title-desc text-center mx-auto mt-4 relative z-10 ipad:text-[20px] iph:text-[16px] text-[15px]">
          {t(`desc.browserless`)}
        </p>

        <div className="flex items-center justify-center ipad:mt-[48px] iph:mt-[24px] mt-[16px] relative z-10 flex-wrap gap-3">
          <Link href="/pricing">
            <Button
              className="min-w-[280px] h-[58px] px-2 text-xl ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
              color="primary">
              Pricing
            </Button>
          </Link>
        </div>

        <div className="left-[50%] -translate-x-[50%] ipad:top-[203px] iph:top-[230px] top-[330px] absolute ipad:w-[1200px] ipad:h-[714px] iph:w-[760px] iph:h-[452px] w-[370px] h-[220px]">
          <Image src={`/assets/images/product/browserless.png`} alt="" quality={100} fill />
        </div>
      </div>
    </div>
  );
}

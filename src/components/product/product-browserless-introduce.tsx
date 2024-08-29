import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';
import { Button } from '@nextui-org/react';

export default function ProductBrowserlessIntroduce() {
  const t = useTranslations();
  return (
    <div className="mx-auto container ipad:pt-[120px] iph:pt-[60px] pt-[40px]">
      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto text-center">
        {t('product.browserless.introduceTitle')}
      </h2>
      <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mt-3 text-center">
        {t('product.browserless.introduceSubTitle')}
      </p>

      <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
        <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
          <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
            {t('product.browserless.introduceTitle1')}
          </h3>

          <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
            {t('product.browserless.introduce1')}
          </p>
        </div>

        <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
          <Image src="/assets/images/home/scraping.png" quality={100} alt="" fill />
        </div>
      </div>

      <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
        <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
          <Image src="/assets/images/home/scraping.png" quality={100} alt="" fill />
        </div>

        <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
          <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
            {t('product.browserless.introduceTitle2')}
          </h3>

          <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
            {t('product.browserless.introduce2')}
          </p>
        </div>
      </div>

      <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
        <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
          <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
            {t('product.browserless.introduceTitle3')}
          </h3>

          <p className="font-medium iph:text-lg text-base text-[var(--text-color-4)]">
            {t('product.browserless.introduce3')}
          </p>
          <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
            {t('product.browserless.introduce3-2')}
          </p>
          <p className="font-medium iph:text-lg text-base text-[var(--text-color-4)] mt-8">
            {t('product.browserless.introduce3-3')}
          </p>
          <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
            {t('product.browserless.introduce3-4')}
          </p>
        </div>
        <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
          <Image src="/assets/images/product/performance.png" quality={100} alt="" fill />
        </div>
      </div>

      <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
        <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
          <Image src="/assets/images/product/performance.png" quality={100} alt="" fill />
        </div>

        <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
          <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
            {t('product.browserless.introduceTitle4')}
          </h3>

          <p className="font-medium iph:text-lg text-base text-[var(--text-color-4)]">
            {t('product.browserless.introduce4')}
          </p>
          <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
            {t('product.browserless.introduce4-2')}
          </p>
          <p className="font-medium iph:text-lg text-base text-[var(--text-color-4)] mt-8">
            {t('product.browserless.introduce4-3')}
          </p>
          <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
            {t('product.browserless.introduce4-4')}
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap ipad:gap-6 iph:gap-3 gap-2 ipad:mt-[48px] iph:mt-[24px] mt-4">
        <Link href="/pricing">
          <Button
            className="min-w-[150px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
            color="primary">
            Pricing
          </Button>
        </Link>
      </div>
    </div>
  );
}

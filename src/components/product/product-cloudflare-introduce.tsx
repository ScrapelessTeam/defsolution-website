import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { dashboardWebsite } from '@/config';
import { Link } from '@/navigation';
import { Button } from '@nextui-org/react';
import MySvg from '@/components/my-svg';

export default function ProductCloudflareIntroduce() {
  const t = useTranslations();
  return (
    <div className="mx-auto container">
      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto ipad:w-[800px] text-center">
        {t('product.cloudflare.introduceTitle')}
      </h2>

      <div className="ipad:mt-[90px] iph:mt-[45px] mt-[30px] flex flex-wrap iph:flex-nowrap justify-between items-center">
        <div className="iph:hidden block">
          <Image src="/assets/images/product/cloudflare-success.png" quality={100} alt="" width={608} height={416} />
        </div>

        <div className="w-[556px] iph:pt-0 pt-10">
          <div className="flex items-center ipad:gap-4 gap-2">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/lock.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce1')}
            </p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/ip-border.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce2')}
            </p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/rate.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce3')}
            </p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/finger.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce4')}
            </p>
          </div>
          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/bot.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce5')}
            </p>
          </div>
        </div>

        <div className="iph:block hidden">
          <Image src="/assets/images/product/cloudflare-success.png" quality={100} alt="" width={608} height={416} />
        </div>
      </div>

      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto ipad:w-[800px] ipad:mt-[90px] iph:mt-[45px] mt-[30px] text-center">
        {t('product.cloudflare.introduceTitle2')}
      </h2>

      <div className="ipad:mt-[90px] iph:mt-[45px] mt-[30px] flex flex-wrap iph:flex-nowrap justify-between items-center">
        <div>
          <Image src="/assets/images/product/cloudflare-success.png" quality={100} alt="" width={608} height={416} />
        </div>

        <div className="w-[556px] iph:pt-0 pt-10">
          <div className="flex items-center ipad:gap-4 gap-2">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/bag.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce6')}
            </p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/code-1.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce7')}
            </p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/rate.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce8')}
            </p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/bot.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce9')}
            </p>
          </div>
          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/def.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">
              {t('product.cloudflare.introduce10')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap ipad:gap-6 iph:gap-3 gap-2 ipad:mt-[90px] iph:mt-[45px] mt-[30px]">
        <Link href={dashboardWebsite + 'account/register'} target="__blank">
          <Button
            className="min-w-[179px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
            color="primary">
            {t('get-started')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

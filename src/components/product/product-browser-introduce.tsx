import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { dashboardWebsite, docsWebsite } from '@/config';
import { Link } from '@/navigation';
import { Button } from '@nextui-org/react';
import MySvg from '@/components/my-svg';

export default function ProductionBrowserIntroduce() {
  const t = useTranslations();
  return (
    <div className="mx-auto container">
      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto ipad:w-[800px] text-center">
        {t('product.browser.introduceTitle')}
      </h2>

      <div className="ipad:mt-[90px] iph:mt-[45px] mt-[30px] flex flex-wrap iph:flex-nowrap justify-between items-center">
        <div className="iph:hidden block">
          <Image src="/assets/images/product/browser-scraping.png" quality={100} alt="" width={540} height={380} />
        </div>

        <div className="w-[556px] iph:pt-0 pt-10">
          <div className="flex items-center ipad:gap-4 gap-2">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/browser.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce1')}</p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/lock.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce2')}</p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/cloud-2.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce3')}</p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/api.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce4')}</p>
          </div>
        </div>

        <div className="iph:block hidden">
          <Image src="/assets/images/product/browser-scraping.png" quality={100} alt="" width={540} height={380} />
        </div>
      </div>

      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto ipad:w-[901px] ipad:mt-[90px] iph:mt-[45px] mt-[30px] text-center">
        {t('product.browser.introduceTitle2')}
      </h2>

      <div className="ipad:mt-[90px] iph:mt-[45px] mt-[30px] flex flex-wrap iph:flex-nowrap justify-between items-center">
        <div>
          <Image src="/assets/images/product/browser-multi.png" quality={100} alt="" width={540} height={380} />
        </div>
        <div className="w-[556px] iph:pt-0 pt-10">
          <div className="flex items-center ipad:gap-4 gap-2">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/multi.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce6')}</p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/finger.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce7')}</p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/person.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce8')}</p>
          </div>

          <div className="flex items-center ipad:gap-4 gap-2 ipad:mt-10 iph:mt-5 mt-4">
            <div className="flex items-center justify-center bg-[var(--bg-hover)] rounded p-2">
              <MySvg src="/assets/icons/product/setup.svg" />
            </div>

            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{t('product.browser.introduce9')}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap ipad:gap-6 iph:gap-3 gap-2 ipad:mt-[90px] iph:mt-[45px] mt-[30px]">
        <Link href={docsWebsite} target="__blank">
          <Button
            className="min-w-[150px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
            color="primary">
            {t('api-docs')}
          </Button>
        </Link>
        <Link href={dashboardWebsite + 'account/login'} target="__blank">
          <Button
            className="min-w-[179px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] border hover:bg-[var(--primary-color)] hover:text-white"
            color="primary"
            variant="ghost">
            {t('start-free-trial')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

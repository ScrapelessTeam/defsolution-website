'use client';

import { Button } from '@nextui-org/react';
import { dashboardWebsite } from '@/config';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import MySvg from '@/components/my-svg';

export default function HomeDefine() {
  const t = useTranslations();

  return (
    <div className="mx-auto container ipad:py-[120px] iph:py-[60px] py-[40px]">
      <h2 className="mx-auto text-h2 ipad:text-[32px] iph:text-[24px] text-xl text-center ipad:w-[841px] iph:w-[740px]">
        {t('Index.define.title')}
      </h2>

      <div className="ipad:flex flex-wrap mt-[48px] hidden">
        <div className="p-10 w-[394px]">
          <MySvg src="/assets/icons/home/gift.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.free-fingerprint-browser')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">
            {t('Index.define.free-finger-desc1')}
            <span className="text-[var(--text-color-4)] font-medium">{t('Index.define.free-finger-desc2')}</span>
            {t('Index.define.free-finger-desc3')}
            <span className="text-[var(--text-color-4)] font-medium">{t('Index.define.free-finger-desc4')}</span>
          </p>
        </div>

        <div className="p-10 w-[394px] linear-border-2 linear-border-5">
          <MySvg src="/assets/icons/home/rpa-black.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.free-rpa')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.free-rpa-desc')}</p>
        </div>

        <div className="p-10 w-[394px]">
          <MySvg src="/assets/icons/home/unblock.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.multiple-web-unblocking-solutions')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">
            {t('Index.define.unblock-desc1')}
            {/* <span className="text-[var(--text-color-4)] font-medium">{t('Index.define.unblock-desc2')}&nbsp;</span>
            {t('Index.define.unblock-desc3')} */}
          </p>
        </div>

        <div className="p-10 w-[394px] linear-border-3 linear-border-6">
          <MySvg src="/assets/icons/home/ruler.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.customized-services')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.custom-service-desc')}</p>
        </div>

        <div className="p-10 w-[394px] border border-solid border-[#D8D9E0] box-border">
          <MySvg src="/assets/icons/home/cloud-04.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.cloud-based-browser')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.cloud-based-desc')}</p>
        </div>

        <div className="p-10 w-[394px] linear-border-8 linear-border-7">
          <MySvg src="/assets/icons/home/server-01.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.cloud-services')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.cloud-services-desc')}</p>
        </div>

        <div className="p-10 w-[394px] flex justify-center items-center">
          <Link href={dashboardWebsite + 'account/login'} target="__blank">
            <Button
              className="min-w-[178px] h-[46px] px-2 text-lg border hover:bg-[var(--primary-color)] hover:text-white"
              color="primary"
              variant="ghost">
              {t('start-free-trial')}
            </Button>
          </Link>
        </div>

        <div className="p-10 w-[394px] linear-border-9 linear-border-10">
          <MySvg src="/assets/icons/home/passcode-lock.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.professional')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.professional-desc')}</p>
        </div>

        <div className="p-10 w-[394px] flex justify-center items-center">
        <Link href='/book-a-demo'>
          <Button
            className="min-w-[178px] h-[46px] px-2 text-lg border bg-[var(--primary-color)] text-white"
            color="primary">
            {t('contact-us')}
          </Button>
        </Link>
        </div>
      </div>

      <div className="ipad:hidden iph:flex flex-wrap mt-[24px] hidden">
        <div className="p-10 flex-1 linear-border-3 linear-border-6">
          <MySvg src="/assets/icons/home/gift.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.free-fingerprint-browser')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">
            {t('Index.define.free-finger-desc1')}&nbsp;
            <span className="text-[var(--text-color-4)] font-medium">{t('Index.define.free-finger-desc2')}&nbsp;</span>
            {t('Index.define.free-finger-desc3')}
            <span className="text-[var(--text-color-4)] font-medium">&nbsp;{t('Index.define.free-finger-desc4')}</span>
          </p>
        </div>

        <div className="p-10 flex-1 border border-solid border-[#D8D9E0] box-border">
          <MySvg src="/assets/icons/home/cloud-04.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.cloud-based-browser')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.cloud-based-desc')}</p>
        </div>

        <div className="p-10 flex-1 linear-border-8 linear-border-7">
          <MySvg src="/assets/icons/home/rpa-black.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.free-rpa')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.free-rpa-desc')}</p>
        </div>
      </div>

      <div className="ipad:hidden iph:hidden flex-wrap mt-[16px] flex">
        <div className="p-10">
          <MySvg src="/assets/icons/home/gift.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.free-fingerprint-browser')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">
            {t('Index.define.free-finger-desc1')}&nbsp;
            <span className="text-[var(--text-color-4)] font-medium">{t('Index.define.free-finger-desc2')}&nbsp;</span>
            {t('Index.define.free-finger-desc3')}
            <span className="text-[var(--text-color-4)] font-medium">&nbsp;{t('Index.define.free-finger-desc4')}</span>
          </p>
        </div>

        <div className="p-10 border-t border-b border-solid border-[#D8D9E0] box-border">
          <MySvg src="/assets/icons/home/cloud-04.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.cloud-based-browser')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.cloud-based-desc')}</p>
        </div>

        <div className="p-10">
          <MySvg src="/assets/icons/home/rpa-black.svg" />

          <p className="text-title-primary ipad:text-lg iph:text-base text-sm-weight mt-8">
            {t('Index.define.free-rpa')}
          </p>

          <p className="text-[var(--text-color-3)] text-sm mt-3">{t('Index.define.free-rpa-desc')}</p>
        </div>
      </div>
    </div>
  );
}

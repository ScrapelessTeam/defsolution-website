import { useTranslations } from 'next-intl';
import { dashboardWebsite } from '@/config';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { Link } from '@/navigation';
import ContactUsPrimary from '@/components/contact-us-primary';
import '@/styles/common.scss';

export default function ProductUnblockWebsite() {
  const t = useTranslations();
  return (
    <div className="bg-[var(--bg-color)] ipad:py-[100px] iph:py-[50px] py-[34px]">
      <div className="mx-auto container">
        <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto text-center">
          {t('product.unblock.title')}
        </h2>
        <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mx-auto text-center mt-3">
          {t('product.unblock.desc')}
        </p>

        <div className="iph:block hidden unblock-website-item ipad:mt-[136px] iph:mt-[68px] mt-[46px] relative">
          <div className="absolute bottom-0 ipad:right-8 right-0 ipad:w-[468px] iph:w-[340px] ipad:h-[266px] iph:h-[193px]">
            <Image src="/assets/images/product/unblock.png" quality={100} alt="" width={468} height={266} />
          </div>

          <div className="ipad:w-[532px] iph:w-[340px]">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] mb-2">
              <span className="text-[var(--primary-color)]">{t('product.unblock.unblock')}</span>{' '}
              {t('product.unblock.effect')}
            </h3>
            <span className="text-[var(--text-color-4)] ipad:text-lg iph:text-base text-sm">
              {t('product.unblock.desc1')}
            </span>
          </div>
        </div>

        <div className="iph:hidden block mt-[46px]">
          <div className="ipad:w-[532px] iph:w-[330px]">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] mb-2">
              <span className="text-[var(--primary-color)]">{t('product.unblock.unblock')}</span>{' '}
              {t('product.unblock.effect')}
            </h3>
            <span className="text-[var(--text-color-4)] ipad:text-lg iph:text-base text-sm">
              {t('product.unblock.desc1')}
            </span>
          </div>
        </div>

        <div className="iph:hidden block unblock-website-item mt-[32px] relative">
          <div className="absolute bottom-0 ipad:right-8 right-0 ipad:w-[468px] iph:w-[340px] ipad:h-[266px] iph:h-[193px]">
            <Image src="/assets/images/product/unblock.png" quality={100} alt="" width={468} height={266} />
          </div>
        </div>

        <div className="iph:flex hidden justify-end unblock-website-item ipad:mt-[136px] iph:mt-[68px] mt-[46px] relative">
          <div className="absolute bottom-0 ipad:left-8 left-0 ipad:w-[484px] iph:w-[340px] ipad:h-[319px] iph:h-[224px]">
            <Image src="/assets/images/product/simulate.png" quality={100} alt="" width={484} height={319} />
          </div>

          <div className="ipad:w-[532px] iph:w-[340px]">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] mb-2">
              <span className="text-[var(--primary-color)]">{t('product.unblock.simulate')}</span>{' '}
              {t('product.unblock.user-behavior')}
            </h3>
            <span className="text-[var(--text-color-4)] ipad:text-lg iph:text-base text-sm">
              {t('product.unblock.desc2')}
            </span>
          </div>
        </div>

        <div className="iph:hidden block mt-[46px]">
          <div className="ipad:w-[532px] iph:w-[330px]">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] mb-2">
              <span className="text-[var(--primary-color)]">{t('product.unblock.simulate')}</span>{' '}
              {t('product.unblock.user-behavior')}
            </h3>
            <span className="text-[var(--text-color-4)] ipad:text-lg iph:text-base text-sm">
              {t('product.unblock.desc2')}
            </span>
          </div>
        </div>

        <div className="iph:hidden block mt-[32px] unblock-website-item relative">
          <div className="absolute bottom-0 ipad:left-8 left-0 ipad:w-[484px] iph:w-[340px] ipad:h-[319px] iph:h-[224px]">
            <Image src="/assets/images/product/simulate.png" quality={100} alt="" width={484} height={319} />
          </div>
        </div>

        <div className="iph:block hidden unblock-website-item ipad:mt-[136px] iph:mt-[68px] mt-[46px] relative">
          <div className="absolute bottom-0 ipad:right-8 right-0 ipad:w-[468px] iph:w-[340px] ipad:h-[266px] iph:h-[205px]">
            <Image src="/assets/images/product/deploy.png" alt="" quality={100} width={484} height={292} />
          </div>

          <div className="ipad:w-[532px] iph:w-[340px]">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] mb-2">
              <span className="text-[var(--primary-color)]">{t('product.unblock.deploy')}</span>{' '}
              {t('product.unblock.and-execute-easily')}
            </h3>
            <span className="text-[var(--text-color-4)] ipad:text-lg iph:text-base text-sm">
              {t('product.unblock.desc3')}
            </span>
          </div>
        </div>

        <div className="iph:hidden block mt-[46px]">
          <div className="ipad:w-[532px] iph:w-[330px]">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] mb-2">
              <span className="text-[var(--primary-color)]">{t('product.unblock.deploy')}</span>{' '}
              {t('product.unblock.and-execute-easily')}
            </h3>
            <span className="text-[var(--text-color-4)] ipad:text-lg iph:text-base text-sm">
              {t('product.unblock.desc3')}
            </span>
          </div>
        </div>
        <div className="iph:hidden block mt-[32px] unblock-website-item relative">
          <div className="absolute bottom-0 ipad:right-8 right-0 ipad:w-[468px] iph:w-[340px] ipad:h-[266px] iph:h-[205px]">
            <Image src="/assets/images/product/deploy.png" alt="" quality={100} width={484} height={292} />
          </div>
        </div>

        <div className="flex justify-center ipad:gap-6 iph:gap-3 gap-2 ipad:mt-[48px] iph:mt-[24px] mt-[16px] flex-wrap">
          <ContactUsPrimary />
          <Link href={dashboardWebsite + 'account/register'} target="__blank">
            <Button
              className="min-w-[179px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] border hover:bg-[var(--primary-color)] hover:text-white"
              color="primary"
              variant="ghost">
              {t('get-started')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

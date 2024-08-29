import { useTranslations } from 'next-intl';
import { dashboardWebsite } from '@/config';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { Link } from '@/navigation';
import MySvg from '@/components/my-svg';

export default function SolutionAntiIntroduce() {
  const t = useTranslations();
  return (
    <div className="bg-[var(--bg-primary)] ipad:pb-[120px] iph:pb-[60px] pb-[40px]">
      <div className="mx-auto container">
        <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl text-center mx-auto">
          {t('solution.anti.introduceTitle')}
        </h2>
        <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mt-3 text-center">
          {t('solution.anti.introduceDesc')}
        </p>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <MySvg src="/assets/icons/logo-text-primary.svg" />
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
              {t('solution.anti.introduceExecute')}{' '}
              <span className="text-[var(--primary-color)]">{t('solution.anti.introduceWebScrap')}</span>{' '}
              {t('solution.anti.introduceAuto')}
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.anti.introduceDesc1')}
            </p>
          </div>

          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image src="/assets/images/solution/anti-1.png" alt="" fill />
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image src="/assets/images/solution/anti-2.png" alt="" fill />
          </div>
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('solution.anti.introduceTitle2-1')}
              <span className="text-[var(--text-color-5)]"> {t('solution.anti.introduceTitle2-2')}</span>
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.anti.introduceDesc2')}
            </p>
            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)] mt-[28px]">
              {t('solution.anti.introduceDesc3')}
            </p>
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <MySvg src="/assets/icons/logo-text-primary.svg" />
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:my-4 iph:my-2 my-1">
              {t('solution.anti.introduceTitle3')}
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.anti.introduceDesc4')}
            </p>
            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)] mt-[28px]">
              {t('solution.anti.introduceDesc5')}
            </p>
          </div>

          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image src="/assets/images/solution/anti-3.png" alt="" fill />
          </div>
        </div>

        <div className="flex items-center justify-center ipad:mt-[48px] iph:mt-[24px] mt-4">
          <Link href={dashboardWebsite + 'account/register'} target="__blank">
            <Button
              className="min-w-[152px] h-[46px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
              color="primary">
              <div className="flex gap-3">
                <span>{t('get-started')}</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

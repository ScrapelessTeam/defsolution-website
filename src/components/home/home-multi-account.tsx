import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { dashboardWebsite } from '@/config';
import { Link } from '@/navigation';
import MySvg from '@/components/my-svg';
import FeatureIntroduceCard from '@/components/feature-introduce-card';

export default function HomeMultiAccount() {
  const t = useTranslations();
  const introduces = [
    {
      icon: '/assets/icons/sense/sense-browser-fingerprint.svg',
      title: t('Index.multi.title1'),
      desc: t('Index.multi.desc1'),
    },
    {
      icon: '/assets/icons/sense/sense-free-fingerprint-browser.svg',
      title: t('Index.multi.title2'),
      desc: t('Index.multi.desc3'),
    },
    {
      icon: '/assets/icons/sense/sense-robot.svg',
      title: 'Nstbrowser RPA',
      desc: t('Index.multi.desc4'),
    },
    {
      icon: '/assets/icons/sense/sense-browser-multi-window.svg',
      title: t('Index.multi.title3'),
      desc: t('Index.multi.desc5'),
    },
  ];

  return (
    <div className="bg-[var(--bg-color)]">
      <div className="mx-auto container text-center ipad:py-[120px] iph:py-[60px] py-[40px]">
        <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl">{t('Index.multi.title')}</h2>

        <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mt-3">{t('Index.multi.desc')}</p>
        <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm">{t('Index.multi.desc2')}</p>

        <div className="flex flex-wrap justify-center ipad:gap-8 iph:gap-6 gap-4 ipad:mt-[48px] iph:mt-[38px] mt-[28px]">
          {introduces.map((f, i) => {
            return (
              <FeatureIntroduceCard
                className="ipad:w-[576px] iph:w-[336px] w-[350px] bg-white"
                key={i}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                href="/solution/multi-account"
              />
            );
          })}
        </div>

        <div className="flex items-center justify-center ipad:mt-12 iph:mt-6 mt-4 flex-wrap gap-3">
          <Link href="/download">
            <Button
              className="min-w-[244px] h-[46px] px-2 font-medium ipad:text-lg iph:text-base text-sm bg-[var(--text-color-1)] text-white"
              color="primary">
              <div className="flex ipad:gap-3 iph:gap-2 gap-1 items-center">
                <MySvg src="/assets/icons/chrome.svg" />
                <span>{t('download-for-free')}</span>
              </div>
            </Button>
          </Link>
          <Link href={dashboardWebsite + 'account/login'} target="__blank">
            <Button
              className="min-w-[244px] h-[46px] font-medium px-2 ipad:text-lg iph:text-base text-sm bg-[var(--primary-color)] text-white"
              color="primary">
              {t('start-free-trial')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

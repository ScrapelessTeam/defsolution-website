import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { dashboardWebsite } from '@/config';
import { Link } from '@/navigation';
import MySvg from '@/components/my-svg';
import FeatureIntroduceCard from '@/components/feature-introduce-card';

export default function HomeBtn() {
  const t = useTranslations();
  const introduces = [
    {
      icon: '/assets/icons/sense/sense-browserless.svg',
      title: t('Index.sense.title1'),
      desc: t('Index.sense.desc1'),
    },
    {
      icon: '/assets/icons/sense/sense-browser-fingerprint.svg',
      title: t('Index.sense.title2'),
      desc: t('Index.sense.desc2'),
    },
    {
      icon: '/assets/icons/sense/sense-cloud-cluster.svg',
      title: t('Index.sense.title3'),
      desc: t('Index.sense.desc3'),
    },
    {
      icon: '/assets/icons/sense/sense-anti-detection-bot.svg',
      title: t('Index.sense.title4'),
      desc: t('Index.sense.desc4'),
    },
  ];

  return (
    <div className="relative ipad:pt-[102px] iph:pt-[51px] pt-[40px] ipad:pb-[120px] iph:pb-[60px] pb-[40px]">
      <div className="flex items-center justify-center w-full max-w-[1920px] l:h-[400px] ipad:h-[360px] iph:h-[340px] h-[300px] absolute top-0 left-[50%] -translate-x-[50%]">
        <Image src="/assets/images/home/net-down.png" priority quality={100} alt="" fill />
      </div>

      <div className="mx-auto container">
        <div className="flex items-center justify-center flex-wrap gap-3">
          <Link href="/download">
            <Button
              className="min-w-[284px] h-[58px] px-2 font-medium ipad:text-xl iph:text-base text-[15px] bg-[var(--text-color-1)] text-white"
              color="primary">
              <div className="flex ipad:gap-3 iph:gap-2 gap-1 items-center">
                <MySvg src="/assets/icons/chrome.svg" />
                <span>{t('download-for-free')}</span>
              </div>
            </Button>
          </Link>
          <Link href={dashboardWebsite + 'account/login'} target="__blank">
            <Button className="min-w-[284px] h-[58px] px-2 font-medium ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white">
              {t('start-free-trial')}
            </Button>
          </Link>
        </div>

        <div className="l:mt-[150px] ipad:mt-[120px] iph:mt-[75px] mt-[50px] flex flex-wrap items-center justify-center text-center">
          <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl">
            {t('home.cloud-based-fingerprint-browser')}
          </h2>
        </div>
        <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm text-center mx-auto mt-3 ipad:w-[880px]">
          {t('home.browserDesc')}
        </p>

        <div className="flex flex-wrap ipad:gap-8 iph:gap-6 gap-4 ipad:mt-[48px] iph:mt-[24px] mt-[16px] justify-center">
          {introduces.map((f, i) => {
            return (
              <FeatureIntroduceCard
                className="ipad:w-[576px] iph:w-[336px] w-[350px]"
                href="/solution/fingerprint-browser"
                key={i}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

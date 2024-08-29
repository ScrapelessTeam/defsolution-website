import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { dashboardWebsite } from '@/config';
import { combineClasses } from '@/lib/utils';
import { Link } from '@/navigation';
import MySvg from '@/components/my-svg';

interface IntroduceData {
  icon: string;
  title: string;
  desc: string;
  bg: React.CSSProperties;
}

export default function HomeNeeds() {
  const t = useTranslations();
  const introduces: IntroduceData[] = [
    {
      icon: '/assets/icons/home/cloud-02.svg',
      title: t('Index.needs.title1'),
      desc: t('Index.needs.desc1'),
      bg: {
        backgroundColor: '#EFF1FF',
      },
    },
    {
      icon: '/assets/icons/home/anti-02.svg',
      title: t('Index.needs.title2'),
      desc: t('Index.needs.desc2'),
      bg: {
        backgroundColor: '#FFF7EF',
      },
    },
    {
      icon: '/assets/icons/home/cloud-03.svg',
      title: t('Index.needs.title3'),
      desc: t('Index.needs.desc3'),
      bg: {
        backgroundColor: '#EBFFF5',
      },
    },
  ];

  return (
    <div className="relative ipad:pt-[102px] iph:pt-[51px] pt-[40px] ipad:pb-[120px] iph:pb-[60px] pb-[40px]">
      <div className="mx-auto container">
        <div className="flex flex-wrap items-center justify-center text-center">
          <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl">{t('Index.needs.title')}</h2>
        </div>

        <div className="flex flex-wrap justify-center ipad:gap-8 iph:gap-4 gap-[10px] ipad:mt-[48px] iph:mt-[24px] mt-[16px]">
          {introduces.map((f, i) => {
            return (
              <div
                className="ipad:flex-1 iph:flex-1 w-[330px] text-center py-10 px-8 border border-solid border-[var(--border-color)] rounded-2xl bg-white"
                key={i}>
                <div
                  className={combineClasses(
                    'w-[64px] h-[64px] mx-auto flex items-center justify-center rounded-xl',
                    `bg-[${f.bg}]`,
                  )}
                  style={f.bg}>
                  <MySvg src={f.icon} />
                </div>

                <p className="text-title-primary ipad:text-lg iph:text-base text-sm mt-6 p-[14px]">{f.title}</p>

                <p className="text-sm font-normal text-[var(--text-color-3)] mt-3">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center ipad:mt-[48px] iph:mt-[24px] mt-4 flex-wrap gap-3">
          <Link href="/download">
            <Button
              className="min-w-[244px] h-[46px] px-2 ipad:text-lg iph:text-base text-sm font-medium bg-[var(--text-color-1)] text-white"
              color="primary">
              <div className="flex ipad:gap-3 iph:gap-2 gap-1 items-center">
                <MySvg src="/assets/icons/chrome.svg" />
                <span>{t('download-for-free')}</span>
              </div>
            </Button>
          </Link>
          <Link href={dashboardWebsite + 'account/login'} target="__blank">
            <Button
              className="min-w-[244px] h-[46px] px-2 font-medium ipad:text-lg iph:text-base text-sm bg-[var(--primary-color)] text-white"
              color="primary">
              {t('start-free-trial')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

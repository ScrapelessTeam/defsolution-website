import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { dashboardWebsite } from '@/config';
import MySvg from '@/components/my-svg';
import { Link } from '@/navigation';
import { combineClasses } from '@/lib/utils';

interface IntroduceData {
  icon: string;
  title: string;
  desc: string;
  bg: React.CSSProperties;
}

export default function SolutionBrowserStart() {
  const t = useTranslations();
  const introduces: IntroduceData[] = [
    {
      icon: '/assets/icons/home/cloud-02.svg',
      title: t('solution.browser.startTitle'),
      desc: t('solution.browser.startDesc'),
      bg: {
        backgroundColor: '#EFF1FF',
      },
    },
    {
      icon: '/assets/icons/home/anti-02.svg',
      title: t('solution.browser.startTitle2'),
      desc: t('solution.browser.startDesc2'),
      bg: {
        backgroundColor: '#FFF7EF',
      },
    },
    {
      icon: '/assets/icons/home/cloud-03.svg',
      title: t('solution.browser.startTitle3'),
      desc: t('solution.browser.startDesc3'),
      bg: {
        backgroundColor: '#EBFFF5',
      },
    },
  ];

  return (
    <div className="relative ipad:py-[120px] iph:py-[60px] py-[40px] bg-white">
      <div className="mx-auto container">
        <div className="flex flex-wrap justify-center ipad:gap-8 iph:gap-4 gap-[10px]">
          {introduces.map((f, i) => {
            return (
              <div
                className="ipad:flex-1 iph:flex-1 text-center py-10 px-8 border border-solid border-[var(--border-color)] rounded-2xl"
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

                <p className="text-desc-primary mt-3">{f.desc}</p>
              </div>
            );
          })}
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

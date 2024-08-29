import { useTranslations } from 'next-intl';
import { solutionList } from '@/config';
import FeatureIntroduceCard from '@/components/feature-introduce-card';

type IntroduceType = {
  scraping: {
    icon: string;
    title: string;
    desc: string;
  }[];
};

export default function SolutionSense() {
  const t = useTranslations('solution');
  const introduces: IntroduceType = {
    scraping: [
      {
        icon: '/assets/icons/sense/sense-intelligent-ip-rotation.svg',
        title: t('sense.scrap.title1'),
        desc: t('sense.scrap.desc1'),
      },
      {
        icon: '/assets/icons/sense/sense-web-unblocker.svg',
        title: t('sense.scrap.title2'),
        desc: t('sense.scrap.desc2'),
      },
      {
        icon: '/assets/icons/sense/sense-robot.svg',
        title: t('sense.scrap.title3'),
        desc: t('sense.scrap.desc3'),
      },
      {
        icon: '/assets/icons/sense/sense-proxies.svg',
        title: t('sense.scrap.title4'),
        desc: t('sense.scrap.desc4'),
      },
    ],
  };

  const currentIntroduce = introduces['scraping'];

  return (
    <div className="mx-auto container ipad:pt-[120px] iph:pt-[60px] pt-[40px]">
      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto text-center ipad:w-[800px]">
        {t(`sense.scraping`)}
      </h2>

      <div className="flex flex-wrap justify-center ipad:gap-8 iph:gap-6 gap-4 ipad:mt-[48px] iph:mt-[24px] mt-4">
        {currentIntroduce.map((f, i) => {
          return (
            <FeatureIntroduceCard
              className="ipad:w-[576px] iph:w-[336px] w-[350px] bg-white"
              key={i}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              more={false}
            />
          );
        })}
      </div>
    </div>
  );
}

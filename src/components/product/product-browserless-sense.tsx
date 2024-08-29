import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import FeatureIntroduceCard from '@/components/feature-introduce-card';

export default function ProductBrowserlessSense() {
  const t = useTranslations();
  const introduces = [
    {
      icon: '/assets/icons/sense/sense-complex-scripts.svg',
      title: t('product.browserless.senseTitle1'),
      desc: t('product.browserless.senseDesc1'),
    },
    {
      icon: '/assets/icons/sense/sense-rest-api.svg',
      title: t('product.browserless.senseTitle2'),
      desc: t('product.browserless.senseDesc2'),
    },
    {
      icon: '/assets/icons/sense/sense-cookie.svg',
      title: t('product.browserless.senseTitle3'),
      desc: t('product.browserless.senseDesc3'),
    },
    {
      icon: '/assets/icons/sense/sense-remote-interaction.svg',
      title: t('product.browserless.senseTitle4'),
      desc: t('product.browserless.senseDesc4'),
    },
    {
      icon: '/assets/icons/sense/sense-check-browser.svg',
      title: t('product.browserless.senseTitle5'),
      desc: t('product.browserless.senseDesc5'),
    },
    {
      icon: '/assets/icons/sense/sense-js.svg',
      title: t('product.browserless.senseTitle6'),
      desc: t('product.browserless.senseDesc6'),
    },
  ];

  return (
    <div className="mx-auto container pt-[120px]">
      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto text-center ipad:w-[510px]">
        {t('product.browserless.sense')}
      </h2>

      <div className="flex flex-wrap justify-center ipad:gap-8 iph:gap-6 gap-4 ipad:mt-[48px] iph:mt-[24px] mt-[16px]">
        {introduces.map((f, i) => {
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

      <div className="flex justify-center flex-wrap ipad:gap-6 iph:gap-3 gap-2 ipad:mt-[48px] iph:mt-[24px] mt-4">
        <Link href="/pricing">
          <Button
            className="min-w-[150px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
            color="primary">
            Pricing
          </Button>
        </Link>
      </div>
    </div>
  );
}

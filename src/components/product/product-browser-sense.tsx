'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';
import VerticalTabs from '@/components/vertical-tabs';

import type { VerticalTabItem } from '@/components/vertical-tabs';

export default function ProductBrowserSense() {
  const t = useTranslations();
  const tabs: VerticalTabItem[] = [
    {
      icon: '/assets/icons/product/am.svg',
      title: t('multiAccount.list.am'),
      key: 1,
    },
    {
      icon: '/assets/icons/product/shopping-bag.svg',
      title: t('multiAccount.list.ec'),
      key: 2,
    },
    {
      icon: '/assets/icons/product/fe-scraping.svg',
      title: t('multiAccount.list.ticketing'),
      key: 3,
    },
    {
      icon: '/assets/icons/product/fe-lock.svg',
      title: t('multiAccount.list.paa'),
      key: 4,
    },
    {
      icon: '/assets/icons/product/line.svg',
      title: t('multiAccount.list.bab'),
      key: 5,
    },
    {
      icon: '/assets/icons/product/fe-coins.svg',
      title: t('multiAccount.list.ba'),
      key: 6,
    },
    {
      icon: '/assets/icons/product/da.svg',
      title: t('multiAccount.list.da'),
      key: 7,
    },
  ];

  const templateList = [
    {
      id: 1,
      src: '/assets/images/product/am.png',
      desc: t('multiAccount.features.am.paragraphIntroduce1'),
      desc2: t('multiAccount.features.am.paragraphIntroduce3'),
      link: '/features/affiliate_marketing',
    },
    {
      id: 2,
      src: '/assets/images/product/ec.png',
      desc: t('multiAccount.features.ec.paragraphIntroduce1'),
      desc2: t('multiAccount.features.ec.paragraphIntroduce3'),
      link: '/features/e_commerce',
    },
    {
      id: 3,
      src: '/assets/images/product/ticketing.png',
      desc: t('multiAccount.features.tk.paragraphIntroduce1'),
      desc2: t('multiAccount.features.tk.paragraphIntroduce3'),
      link: '/features/web_scraping',
    },
    {
      id: 4,
      src: '/assets/images/product/paa.png',
      desc: t('multiAccount.features.paa.paragraphIntroduce1'),
      desc2: t('multiAccount.features.paa.paragraphIntroduce3'),
      link: '/features/privacy_anonymity',
    },
    {
      id: 5,
      src: '/assets/images/product/bab.png',
      desc: t('multiAccount.features.bab.paragraphIntroduce1'),
      desc2: t('multiAccount.features.bab.paragraphIntroduce3'),
      link: '/features/market_research',
    },
    {
      id: 6,
      src: '/assets/images/product/ba.png',
      desc: t('multiAccount.features.ba.paragraphIntroduce1'),
      des2: t('multiAccount.features.ba.paragraphIntroduce3'),
      link: '/features/bounty_airdrop',
    },
    {
      id: 7,
      src: '/assets/images/product/da.png',
      desc: t('multiAccount.features.da.paragraphIntroduce1'),
      desc2: t('multiAccount.features.da.paragraphIntroduce3'),
      link: '/features/digital_agencies',
    },
  ];

  const [current, setCurrent] = useState(templateList[0]);

  function onSelect(key: VerticalTabItem['key']) {
    const target = templateList.find(item => item.id === key);
    target && setCurrent(target);
  }

  return (
    <div className="mx-auto container ipad:pt-[120px] iph:pt-[60px] pt-[40px]">
      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto text-center">
        {t('product.browser.senseTitle')}
      </h2>
      <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mt-3 text-center">
        {t('product.browser.senseDesc1')}
      </p>
      <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm text-center">
        {t('product.browser.senseDesc2')}
      </p>

      <div className="ipad:mt-[48px] iph:mt-[24px] mt-[16px] flex ipad:justify-between flex-wrap justify-center ipad:gap-12 iph:gap-6 gap-4">
        <VerticalTabs tabs={tabs} default={1} onSelect={onSelect} />

        <div className="p-6 iph:w-[702px] w-[340px]">
          <Image src={current.src} alt="" width={654} height={368} quality={100} />

          <p className="font-normal mt-4 text-sm text-[var(--text-color-3)]">{current.desc}</p>
          <p className="iph:block hidden font-normal mt-4 text-sm text-[var(--text-color-3)]">{current.desc2}</p>

          <div className="flex justify-end mt-4">
            <Link className="text-[var(--primary-color)]" href={current.link}>
              {t('Index.learn-more')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

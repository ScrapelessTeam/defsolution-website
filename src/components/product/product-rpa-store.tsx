'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { dashboardWebsite } from '@/config';
import VerticalTabs from '@/components/vertical-tabs';

import type { VerticalTabItem } from '@/components/vertical-tabs';

export default function ProductRpaStore({ templates }: { templates: any[] }) {
  const t = useTranslations();
  const tabs: VerticalTabItem[] = [
    {
      icon: '/assets/icons/product/zap-fast.svg',
      title: t('product.rpa.store.title1'),
      key: 1,
    },
    {
      icon: '/assets/icons/product/message.svg',
      title: t('product.rpa.store.title2'),
      key: 2,
    },
    {
      icon: '/assets/icons/product/coins.svg',
      title: t('product.rpa.store.title3'),
      key: 3,
    },
    {
      icon: '/assets/icons/product/heart.svg',
      title: t('product.rpa.store.title4'),
      key: 4,
    },
    {
      icon: '/assets/icons/product/chart-up.svg',
      title: t('product.rpa.store.title5'),
      key: 5,
    },
  ];

  const templateAddress = dashboardWebsite + 'app/rpa/workflow-details?templateId=';

  const templateList = [
    {
      id: 1,
      videoSource: 'https://www.youtube.com/embed/J3m6fjcuAso',
      outLink: templateAddress + 'c81de266-e02a-4479-a9e5-0df75b9b483c',
      desc: t('product.rpa.store.desc1'),
    },
    {
      id: 2,
      videoSource: 'https://www.youtube.com/embed/lQpusItEX6w',
      outLink: templateAddress + '4a9c0f5c-2f41-4f76-a516-635f8d6397d7',
      desc: t('product.rpa.store.desc2'),
    },
    {
      id: 3,
      videoSource: 'https://www.youtube.com/embed/gW0qHVjmtO4',
      outLink: templateAddress + '21bd2a52-7b6c-4a6e-9ba0-c07d313ac595',
      desc: t('product.rpa.store.desc3'),
    },
    {
      id: 4,
      videoSource: 'https://www.youtube.com/embed/WBkXB7CxFdE',
      outLink: templateAddress + 'f2b0ad26-9e65-4690-9e29-ec7007ed9060',
      desc: t('product.rpa.store.desc4'),
    },
    {
      id: 5,
      videoSource: 'https://www.youtube.com/embed/fl2lXgyzB-0',
      outLink: templateAddress + '4aa224b4-8c8f-4a25-b19e-cd77f0919817',
      desc: t('product.rpa.store.desc5'),
    },
  ];

  const [current, setCurrent] = useState(templateList[0]);

  function onSelect(key: VerticalTabItem['key']) {
    const target = templateList.find(item => item.id === key);
    target && setCurrent(target);
  }

  return (
    <div className="mx-auto container ipad:pt-[120px] iph:pt-[60px] pt-[40px]">
      <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl mx-auto text-center">{t('product.rpa.title')}</h2>
      <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mt-3 text-center">{t('product.rpa.desc')}</p>

      <div className="ipad:mt-[48px] iph:mt-[24px] mt-[16px] flex flex-wrap justify-center ipad:gap-5 gap-2">
        <VerticalTabs tabs={tabs} default={1} onSelect={onSelect} />

        <div className="ipad:p-6 iph:p-3 p-2 ipad:w-[728px] iph:w-[704px] w-[356px]">
          <iframe
            key={current.id}
            className="iph:w-[680px] w-[340px] iph:h-[393px] h-[210px]"
            width="680"
            height="420"
            src={current.videoSource + '?rel=0&showinfo=0&autoplay=0'}
            title="Best E-commerce Automation Solution | Free Nstbrowser RPA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>

          <div className="mt-4">
            <span className="text-sm text-[var(--text-color-4)]">{current.desc}</span>
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              href={current.outLink}
              target="__blank"
              className="font-lg text-[var(--primary-color)] font-medium cursor-pointer">
              {t('start')}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-wrap justify-center gap-6 ipad:my-12 iph:my-6 my-4 ipad:w-full iph:w-[700px] w-[340px]">
        {templates.map((t, i) => {
          return (
            <Link key={i} href={`/rpa-marketplace/${t.templateId}`}>
              <div className="w-[278px] h-[118px] p-4 rounded-xl border border-solid border-[var(--border-color)]">
                <div className="flex gap-3">
                  <div className="">
                    <Image src={t.imgUrl} quality={100} alt="" width={44} height={44} />
                  </div>
                  <p className="text-[var(--text-color-1)] text-lg font-semibold">{t.name}</p>
                </div>
                <p className="text-ellipsis-2 text-sm text-[var(--text-color-4)]">{t.shortDesc}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Link href="/rpa-marketplace">
          <Button
            className="min-w-[115px] h-[46px] px-2 text-sm ml-4 border hover:bg-[var(--primary-color)] hover:text-white"
            color="primary"
            variant="ghost">
            {t('view-more')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

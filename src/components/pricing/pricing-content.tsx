'use client';

import { combineClasses } from '@/lib/utils';
import type { SubscribedPlan } from '@/types/plan';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Switch } from '../ui/switch';
import styles from './styles.module.css';
import { useSearchParams } from 'next/navigation';
import { PlanLevel, PlanPeriodUnit } from '@/enums/billingEnum';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import PricingItem from './pricing-item';
import PricingCompareHead from './pricing-compare-head';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import PricingCompareContent from './pricing-compare-content';
import PricingContact from './pricing-contact';
import PricingFAQ from './pricing-faq';
import FooterContact from '@/components/footer-contact';

interface PricingContentProps {
  annualRate: number;
  yearData: SubscribedPlan[];
  monthlyData: SubscribedPlan[];
}

function formatAnnualSaving(data: number) {
  return data * 100 + '%';
}

export default function PricingContent({ annualRate, yearData, monthlyData }: PricingContentProps) {
  const t = useTranslations();
  const [isAnnualBilling, setIsAnnualBilling] = useState<boolean>(false);
  const [planData, setPlanData] = useState<SubscribedPlan[]>([]);
  const [tabsData, setTabsData] = useState<{ level: string; tab: string }[]>([]);
  const searchParams = useSearchParams();
  const period = searchParams.get('period') || PlanPeriodUnit.Month;

  useEffect(() => {
    setTabsData(
      planData.map(item => ({
        level: item.level,
        tab: item.name,
      })),
    );
  }, [planData]);

  useEffect(() => {
    if (period === PlanPeriodUnit.Month) {
      setIsAnnualBilling(false);
    } else {
      setIsAnnualBilling(true);
    }
  }, [period]);

  useEffect(() => {
    if (isAnnualBilling || period === PlanPeriodUnit.Year) {
      setPlanData(yearData);
    } else {
      setPlanData(monthlyData);
    }
  }, [isAnnualBilling, period, yearData, monthlyData]);

  function handleFormatTabHead(level: PlanLevel) {
    // 1. 根据 level 获取对应的 planData
    const currentPlanInfo = planData?.find(item => item.level === level);
    if (!currentPlanInfo) {
      return '';
    }

    // 2. 处理价格
    if (isAnnualBilling) {
      return '$' + Math.floor(currentPlanInfo.price / 12) + ' / ' + t('pricing.mo');
    }

    return '$' + currentPlanInfo.price + ' / ' + t('pricing.mo');
  }

  return (
    <div id="pricingWrap" className="relative">
      <div className="flex justify-center items-center mb-6 text-base text-[var(--text-color-1)]">
        <span className={combineClasses(isAnnualBilling && 'text-[var(--text-color-3)]')}>
          {t('pricing.monthlyBilling')}
        </span>
        <Switch checked={isAnnualBilling} className="mx-2" onCheckedChange={setIsAnnualBilling} />
        <div className="flex items-center">
          <span className={combineClasses(!isAnnualBilling && 'text-[var(--text-color-3)]')}>
            {t('pricing.annualBilling')}
          </span>
          {annualRate !== 0 && (
            <div
              className={combineClasses(
                'ml-1 bg-[var(--error-color)] text-white text-xs h-3 box-content',
                styles.saved,
              )}>
              {'-' + formatAnnualSaving(annualRate || 0)}
            </div>
          )}
        </div>
      </div>

      <div className="hidden ml:block">
        <div className="ml:pt-8 ml:grid-cols-3 m:grid-cols-3 md:grid-cols-2 grid-cols-1 price-list-wrap grid grid-flow-row gap-4 mx-auto pt-6">
          {planData.map(item => {
            return (
              <div key={item.planId} className="h-full">
                <PricingItem subscribeDetail={item} isAnnualBilling={isAnnualBilling} />
              </div>
            );
          })}
        </div>
        <div className="mt-6 mb-12 flex items-center flex-wrap space-x-2 rounded border border-solid border-[#FAE0B5] bg-[#FEF7ED] p-3 text-sm leading-5.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.998 12C21.998 6.47715 17.5209 2 11.998 2C6.4752 2 1.99805 6.47715 1.99805 12C1.99805 17.5228 6.4752 22 11.998 22C17.5209 22 21.998 17.5228 21.998 12ZM10.998 16.0769C10.998 16.5867 11.4113 17 11.9211 17H12.075C12.5848 17 12.998 16.5867 12.998 16.0769V10.9231C12.998 10.4133 12.5848 10 12.075 10H11.9211C11.4113 10 10.998 10.4133 10.998 10.9231V16.0769ZM11.998 7C12.5503 7 12.998 7.44771 12.998 8C12.998 8.55228 12.5503 9 11.998 9C11.4458 9 10.998 8.55228 10.998 8C10.998 7.44771 11.4458 7 11.998 7Z"
              fill="#F58B29"
            />
          </svg>

          <span> {t('pricing.startSameProfileTips')}</span>
        </div>
      </div>

      <div className="sticky top-[57px] z-10">
        <div id="fixedItem" className="hidden ml:block py-2 bg-white w-full z-10 left-0">
          <div className="container mx-auto">
            <div className="flex items-center mb-3 py-2">
              <div className={combineClasses('leading-6 text-base font-semibold px-4', styles['title-column'])}>
                {t('pricing.detailedComparison')}
              </div>
              <div className="grid grid-flow-row grid-cols-3 flex-1">
                {planData.map(item => {
                  return (
                    <PricingCompareHead key={item.planId} subscribeDetail={item} isAnnualBilling={isAnnualBilling} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block ml:hidden container mx-auto mt-10">
        <Tabs defaultValue={'Professional'}>
          <ScrollArea className="iph:w-[656px] w-[288px] h-[62px]">
            <TabsList className="flex justify-between mb-2 bg-white h-[48px]">
              {tabsData.map(item => {
                return (
                  <TabsTrigger key={item.tab} className="nst-tab-trigger" value={item.tab}>
                    <div className="flex flex-col items-center space-y-1 space-x-5">
                      <div className="title font-semibold text-xl leading-6">{item.tab}</div>
                      <div className="subtitle text-lg leading-5.5">{handleFormatTabHead(item.level as PlanLevel)}</div>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {tabsData.map(tab => {
            return (
              <TabsContent value={tab.tab} key={tab.tab}>
                <PricingCompareContent
                  className="pt-4"
                  planData={planData}
                  isAnnualBilling={isAnnualBilling}
                  independentRender={true}
                  currentPlanLevel={tab.level}
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      <div className="container mx-auto px-0">
        <PricingCompareContent className="hidden ml:block" planData={planData} isAnnualBilling={isAnnualBilling} />

        <div className="contact-us">
          <FooterContact />
        </div>

        <PricingFAQ className="ipad:block hidden l:mb-[158px] m:mb-[90px] mb-[48px]" />
      </div>
    </div>
  );
}

import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { PlanLevel, PlanPeriodUnit, PlanType } from '@/enums/billingEnum';
import PricingContent from '@/components/pricing/pricing-content';
import PageWrapper from '@/components/page-wrapper';
import Spin from '@/components/spin';

import type { SubscribedPlan } from '@/types/plan';

export async function generateMetadata({ params: { locale } }: LocaleParams) {
  const t = await getTranslations({ locale });

  return {
    title: t('Metadata.pricing.title'),
    description: t('Metadata.pricing.description'),
    keywords: t('Metadata.pricing.keywords'),
  };
}

async function getPricingData() {
  // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const res = await fetch(`${baseURL}/plan/all`, {
  //   method: 'GET',
  // });

  // if (!res.ok) {
  //   return null;
  // }

  const infos: any = {
    data: {
      list: [
        {
          price: 0,
          originalPrice: 59,
          level: 'free',
          type: 'official',
          name: 'Professional',
          memberCap: 5,
          profileCap: -1,
          teamCap: -1,
          planId: '58fda6b5-e3f1-403f-9d88-5d0291daa65d',
          createdAt: '2023-12-22T11:14:49.511Z',
          updatedAt: '2024-08-22T10:56:11.808Z',
          dailyOpenCap: 1000,
          dailyOpenUnit: 0.2,
          memberUnit: 0.18,
          hot: false,
          dailyOpenOnceUnit: 0.004,
          purchasable: true,
          periodNum: 0,
          periodUnit: 'unlimited',
          presell: false,
          metadata: {
            referralFirstRatio: 0.15,
            referralRenewRatio: 0.1,
          },
          badge: 'Free',
          browserless: {
            maxConcurrent: 3,
            maxProxy: 200,
            maxSessionHour: 5,
            proxyUnitPrice: 0.2,
            sessionHourUnitPrice: 0.2,
          },
        },
        {
          price: 29,
          originalPrice: 59,
          level: 'pioneer',
          type: 'pioneer',
          name: 'Pioneer',
          memberCap: -1,
          profileCap: -1,
          teamCap: -1,
          planId: 'cebfc95c-429f-4b9f-9ed7-7bb00448b949',
          createdAt: '2023-12-22T11:14:49.511Z',
          updatedAt: '2024-08-22T10:55:16.837Z',
          metadata: {
            bonus: 5,
            deferment: 10080,
            overage: 10,
            rebate: 25,
            referralFirstRatio: 0.25,
            referralRenewRatio: 0.15,
          },
          dailyOpenCap: -1,
          dailyOpenUnit: 0,
          memberUnit: 0,
          hot: false,
          dailyOpenOnceUnit: 0,
          purchasable: false,
          presell: false,
          periodNum: 1,
          periodUnit: 'month',
          browserless: {
            maxConcurrent: 3,
            maxProxy: 200,
            maxSessionHour: 5,
            proxyUnitPrice: 0.2,
            sessionHourUnitPrice: 0.2,
          },
        },
        {
          price: 208,
          originalPrice: 348,
          level: 'pioneer',
          type: 'pioneer',
          name: 'Pioneer',
          memberCap: -1,
          profileCap: -1,
          teamCap: -1,
          planId: '0d0dc7f0-3b64-4348-be87-364865efda25',
          createdAt: '2023-12-22T11:14:49.511Z',
          updatedAt: '2024-08-22T10:55:53.414Z',
          metadata: {
            bonus: 35,
            deferment: 10080,
            overage: 10,
            rebate: 25,
            referralFirstRatio: 0.25,
            referralRenewRatio: 0.15,
          },
          dailyOpenCap: -1,
          dailyOpenUnit: 0,
          memberUnit: 0,
          hot: false,
          dailyOpenOnceUnit: 0,
          purchasable: false,
          presell: false,
          periodNum: 1,
          periodUnit: 'year',
          browserless: {
            maxConcurrent: 3,
            maxProxy: 200,
            maxSessionHour: 5,
            proxyUnitPrice: 0.2,
            sessionHourUnitPrice: 0.2,
          },
        },
        {
          price: 299,
          originalPrice: 599,
          type: 'official',
          name: 'Enterprise',
          profileCap: -1,
          teamCap: -1,
          planId: '14cd088b-7461-47e0-abf5-01f8b9deafce',
          createdAt: '2023-12-22T11:14:49.511Z',
          updatedAt: '2024-08-22T10:55:28.415Z',
          dailyOpenCap: -1,
          memberCap: -1,
          dailyOpenUnit: 0,
          dailyOpenOnceUnit: 0,
          memberUnit: 0,
          hot: false,
          level: 'enterprise',
          purchasable: true,
          periodNum: 1,
          periodUnit: 'month',
          metadata: {
            referralFirstRatio: 0.15,
            referralRenewRatio: 0.1,
          },
          browserless: {
            maxConcurrent: 3,
            maxProxy: 200,
            maxSessionHour: 5,
            proxyUnitPrice: 0.2,
            sessionHourUnitPrice: 0.2,
          },
        },
        {
          price: 2148,
          originalPrice: 7188,
          type: 'official',
          name: 'Enterprise',
          profileCap: -1,
          teamCap: -1,
          planId: '4c19758c-1ad9-4229-b46e-d33c3dd2825e',
          createdAt: '2023-12-22T11:14:49.511Z',
          updatedAt: '2024-08-22T10:55:40.274Z',
          dailyOpenCap: -1,
          memberCap: -1,
          dailyOpenUnit: 0,
          dailyOpenOnceUnit: 0,
          memberUnit: 0,
          hot: false,
          level: 'enterprise',
          purchasable: true,
          periodNum: 1,
          periodUnit: 'year',
          metadata: {
            referralFirstRatio: 0.15,
            referralRenewRatio: 0.1,
          },
          browserless: {
            maxConcurrent: 3,
            maxProxy: 200,
            maxSessionHour: 5,
            proxyUnitPrice: 0.2,
            sessionHourUnitPrice: 0.2,
          },
        },
      ],
      annualRate: 0.4,
    },
  };

  const { annualRate, list } = infos?.data || ([] as any);
  const filterList = list.filter((item: any) => item.type === PlanType.Official);
  const yearList =
    filterList.filter((item: any) => item.periodUnit === PlanPeriodUnit.Year || item.level === PlanLevel.Free) || [];
  const monthlyList =
    filterList.filter((item: any) => item.periodUnit === PlanPeriodUnit.Month || item.level === PlanLevel.Free) || [];
  // 手动添加免费套餐
  yearList.push({
    price: 0,
    originalPrice: 0,
    type: 'official',
    name: 'Custom',
    profileCap: -1,
    teamCap: -1,
    planId: 'd3c1580e-3de3-437a-8ca6-3c766df02c2as',
    createdAt: '2023-11-27T10:27:00.339Z',
    updatedAt: '2024-04-11T06:26:08.662Z',
    dailyOpenCap: -1,
    memberCap: -1,
    dailyOpenUnit: -1,
    dailyOpenOnceUnit: -1,
    memberUnit: 0,
    hot: false,
    level: 'custom',
    purchasable: true,
    periodNum: 1,
    periodUnit: 'year',
  });
  monthlyList.push({
    price: 0,
    originalPrice: 0,
    type: 'official',
    name: 'Custom',
    profileCap: -1,
    teamCap: -1,
    planId: 'd3c1580e-3de3-437a-8ca6-3c766df022a22',
    createdAt: '2023-11-27T10:27:00.339Z',
    updatedAt: '2024-04-11T06:26:08.662Z',
    dailyOpenCap: -1,
    memberCap: -1,
    dailyOpenUnit: -1,
    dailyOpenOnceUnit: -1,
    memberUnit: -1,
    hot: false,
    level: 'custom',
    purchasable: true,
    periodNum: 1,
    periodUnit: 'year',
  });

  return {
    annualRate,
    yearData: yearList,
    monthlyData: monthlyList,
  };
}
export default async function PagePricing() {
  const t = await getTranslations();
  const pricingData = await getPricingData();

  return (
    <Suspense fallback={<Spin spinning={true} />}>
      <PageWrapper className="pricing-wrap relative m:px-2 sm:px-4 px-5" bottomLine>
        <div className="container mx-auto">
          <div className="m:py-12 py-6 text-center">
            <h1 className="ipad:text-[40px] iph:text-[32px] text-[24px] text-h1 mb-4">{t('pricing.title')}</h1>
            <h2 className="my-sem-medium-text text-[#8B8D98]">{t('pricing.subTitle')}</h2>
          </div>

          <PricingContent
            annualRate={pricingData?.annualRate || 0}
            monthlyData={pricingData?.monthlyData || []}
            yearData={pricingData?.yearData || []}
          />
        </div>
      </PageWrapper>
    </Suspense>
  );
}

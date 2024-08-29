import { useTranslations } from 'next-intl';
import { combineClasses } from '@/lib/utils';
import { PlanLevel } from '@/enums/billingEnum';
import { useApiRedirect } from '@/composables/useApiRedirect';
import { redirectURLEnum } from '@/enums/redirectURLEnum';
import { Link } from '@/navigation';
import { Button } from '../ui/button';
import styles from './styles.module.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import MySvg from '../my-svg';

import type { SubscribedPlan } from '@/types/plan';

interface PricingItemProps {
  subscribeDetail: SubscribedPlan;
  isAnnualBilling?: boolean;
}

const unlimitedFlag = -1;

export default function PricingItem({ subscribeDetail, isAnnualBilling = false }: PricingItemProps) {
  const t = useTranslations();
  const subscriptionPageURL = useApiRedirect(redirectURLEnum.PIONEER);

  const isFreePlan = () => {
    return subscribeDetail.level === PlanLevel.Free || subscribeDetail?.price === 0;
  };

  const isCustomPlan = () => {
    return subscribeDetail.level === PlanLevel.Custom;
  };
  const isPurchasable = () => {
    return subscribeDetail.purchasable === true;
  };
  const btnDisabled = () => {
    return isPurchasable() === false;
  };
  const btnText = () => {
    if (isCustomPlan()) {
      return 'Book a Demo';
    }

    if (isFreePlan()) {
      return 'Book a Demo';
    }

    if (isPurchasable()) {
      return 'Book a Demo';
    }

    return 'Book a Demo';
  };
  const annuallyAverageMonthPrice = () => {
    return Math.floor(subscribeDetail.originalPrice / 12);
  };
  const currentMonthlyPrice = () => {
    if (isAnnualBilling === false) {
      // 月
      return subscribeDetail.price;
    }

    // 年（均月价）
    return Math.floor(subscribeDetail.price / 12);
  };
  const monthlyPrice = () => {
    if (isFreePlan()) {
      return subscribeDetail?.originalPrice || 0;
    }

    if (isAnnualBilling) {
      return annuallyAverageMonthPrice();
    }

    return subscribeDetail.originalPrice;
  };

  function formatUnlimited(value: number, customText?: string) {
    const text = customText || t('pricing.unlimited');
    return value === unlimitedFlag ? text : value;
  }
  function isUnlimited(value: number) {
    return value === unlimitedFlag;
  }
  function handleStartSubscribe() {
    if (isPurchasable() === false) {
      return;
    }

    if (isCustomPlan()) {
      return;
    }

    window.open(subscriptionPageURL, '_target');
  }

  return (
    <div className="relative h-full flex">
      <div className="border border-solid border-[#D0D6E3] flex-1 bg-white rounded-md py-8 px-5 flex flex-col justify-between min-h-[386px] box-content relative z-10">
        <div className="top">
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-xl font-medium leading-7">{subscribeDetail.name}</div>
            {subscribeDetail.badge && (
              <div
                className={combineClasses(
                  'label-wrap text-xs font-medium leading-3 px-[6px] py-1 text-white',
                  styles['label-wrap'],
                )}>
                {subscribeDetail.badge}
              </div>
            )}
          </div>
          {subscribeDetail.level !== PlanLevel.Custom ? (
            <div className="h-[70px]">
              <div className="flex items-baseline">
                <div className="price text-[40px] leading-[48px] font-semibold">${currentMonthlyPrice()}</div>
                <div className="flex items-center text-[var(--text-color-3)] ml-1 text-sm leading-5.5">
                  <div className="origin-price line-through">${monthlyPrice()}</div>
                  <span>/</span>
                  <span className="pl-1">{t('pricing.mo')}</span>
                </div>
              </div>

              <div className="flex items-center ml-1 text-sm leading-5.5">
                {isAnnualBilling && !isFreePlan() && (
                  <>
                    <div className="origin-price">${subscribeDetail.price}</div>
                    <span>/</span>
                    <span className="pl-1">{t('pricing.yr')}</span>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="text-2xl leading-10 font-semibold mb-8">{t('pricing.customPlanTips')}</div>
          )}
        </div>

        <div className="my-6 bg-[#F1F3F5] h-[1px] w-full"></div>

        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-start">
              <div className="div w-1 h-1 rounded-full bg-[var(--primary-color)] mt-[6px]"></div>
              <span className="text-[var(--text-color-3)] ml-2"> {t('pricing.browserProfiles')}</span>
            </div>
            <span className={combineClasses(isUnlimited(subscribeDetail?.profileCap) && 'text-warning font-medium')}>
              {formatUnlimited(subscribeDetail?.profileCap)}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-start">
              <div className="div w-1 h-1 rounded-full bg-[var(--primary-color)] mt-[6px]"></div>
              <div className="flex-1 text-[var(--text-color-3)] ml-2">
                <div>{t('pricing.differentProfileLaunchLimit')}</div>
                <div className="flex items-center space-x-1">
                  <span>{t('pricing.onceDaily')}</span>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <MySvg src="/assets/icons/help.svg" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="text-[var(--text-color-3)]">{t('pricing.dailyProfileOpenCountTip')}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <span className={combineClasses(isUnlimited(subscribeDetail?.dailyOpenCap) && 'text-warning font-medium')}>
              {formatUnlimited(subscribeDetail?.dailyOpenCap)}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-start">
              <div className="div w-1 h-1 rounded-full bg-[var(--primary-color)] mt-[6px]"></div>
              <span className="text-[var(--text-color-3)] ml-2"> {t('pricing.team')}</span>
            </div>
            <span className={combineClasses(isUnlimited(subscribeDetail?.teamCap) && 'text-warning font-medium')}>
              {formatUnlimited(subscribeDetail?.teamCap)}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-start">
              <div className="div w-1 h-1 rounded-full bg-[var(--primary-color)] mt-[6px]"></div>
              <span className="text-[var(--text-color-3)] ml-2"> {t('pricing.teamMember')}</span>
            </div>
            <span
              className={combineClasses(
                'font-medium',
                isUnlimited(subscribeDetail?.memberCap) && 'text-warning font-medium',
              )}>
              {formatUnlimited(subscribeDetail?.memberCap)}
            </span>
          </div>
        </div>

        {/* {!isCustomPlan() && (
          <Button disabled={btnDisabled()} className="w-full" onClick={handleStartSubscribe}>
            {btnText()}
          </Button>
        )}

        {isCustomPlan() && (
          <Link href='/book-a-demo'>
            <Button disabled={btnDisabled()} className="w-full">
              {btnText()}
            </Button>
          </Link>
        )} */}
      </div>
    </div>
  );
}

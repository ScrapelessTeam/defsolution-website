import { SubscribedPlan } from '@/types/plan';
import { useTranslations } from 'next-intl';
import { PlanLevel } from '@/enums/billingEnum';
import { useApiRedirect } from '@/composables/useApiRedirect';
import { redirectURLEnum } from '@/enums/redirectURLEnum';
import { Link } from '@/navigation';
import { Button } from '../ui/button';

interface PricingCompareHeadProps {
  subscribeDetail: SubscribedPlan;
  isAnnualBilling: boolean;
}
export default function PricingCompareHead({ subscribeDetail, isAnnualBilling = false }: PricingCompareHeadProps) {
  const t = useTranslations();
  const subscriptionPageURL = useApiRedirect(redirectURLEnum.PIONEER);

  const isFreePlan = () => {
    return subscribeDetail.level === PlanLevel.Free || subscribeDetail?.price === 0;
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

  const isCustomPlan = () => {
    return subscribeDetail.level === PlanLevel.Custom;
  };
  const isPurchasable = () => {
    return subscribeDetail.purchasable === true;
  };
  const btnDisabled = () => {
    return isPurchasable() === false;
  };

  const currentMonthlyPrice = () => {
    if (isAnnualBilling === false) {
      // 月
      return subscribeDetail.price;
    }

    // 年（均月价）
    return Math.floor(subscribeDetail.price / 12);
  };

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
    <div className="flex flex-col space-y-4 justify-between px-4">
      <div className="flex items-center space-x-3">
        <div className="text-base font-medium leading-7">{subscribeDetail.name}</div>
        {subscribeDetail.badge && <div className="text-[#F58B29]">{subscribeDetail.badge}</div>}
      </div>
      {isCustomPlan() ? (
        <div className="price text-[28px] leading-9 font-medium">{t('pricing.custom')}</div>
      ) : (
        <div className="flex items-baseline">
          <div className="price text-[28px] leading-9 font-medium">
            ${currentMonthlyPrice()}
            <span className="text-sm leading-5.5">/{t('pricing.mo')}</span>
          </div>
        </div>
      )}

      {/* {!isCustomPlan() && (
        <Button disabled={btnDisabled()} className="w-fit" onClick={handleStartSubscribe}>
          {btnText()}
        </Button>
      )}

      {isCustomPlan() && (
        <Link href='/book-a-demo'>
          <Button disabled={btnDisabled()} className="w-fit">
            {btnText()}
          </Button>
        </Link>
      )} */}
    </div>
  );
}

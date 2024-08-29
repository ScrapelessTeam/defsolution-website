import { PlanLevel } from '@/enums/billingEnum';
import { combineClasses } from '@/lib/utils';
import { SubscribedPlan } from '@/types/plan';
import { useTranslations } from 'next-intl';
import styles from './styles.module.css';
import MySvg from '../my-svg';
import PricingFeatureItem from './pricing-feature-item';

interface PricingCompareContentProps {
  planData: SubscribedPlan[];
  isAnnualBilling: boolean;
  independentRender?: boolean;
  currentPlanLevel?: string;
  className?: string;
}

const unlimitedFlag = [0, -1];

export default function PricingCompareContent({
  planData,
  isAnnualBilling = false,
  independentRender = false,
  currentPlanLevel,
  className,
}: PricingCompareContentProps) {
  const t = useTranslations();

  const freePlan = planData?.find((item: SubscribedPlan) => item.level === PlanLevel.Free) || ({} as SubscribedPlan);

  const enterprisePlan =
    planData?.find((item: SubscribedPlan) => item.level === PlanLevel.Enterprise) || ({} as SubscribedPlan);
  const customPlan =
    planData?.find((item: SubscribedPlan) => item.level === PlanLevel.Custom) || ({} as SubscribedPlan);
  const browserProfile = handleFilterLevel('profileCap');
  const differentProfileLaunchLimit = handleFilterLevel('dailyOpenCap');
  const team = handleFilterLevel('teamCap');
  const memberCap = handleFilterLevel('memberCap');
  const memberUnit = handleFilterLevel('memberUnit');

  const features = () => {
    const options = [
      {
        locale: t('pricing.rpa'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.container'),
        support: [
          { level: PlanLevel.Free, value: false },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.authorityManagement'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.cliAndAPI'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.uploadPlugin'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.windowManagement'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.batchCreation'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.cookieManagement'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
    ];

    if (independentRender) {
      options.forEach(item => {
        item.support = item.support.filter(support => support.level === currentPlanLevel);
      });
    }

    return options;
  };

  const support = () => {
    const options = [
      {
        locale: t('pricing.emailSupport'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
      {
        locale: t('pricing.realPersonSupport'),
        support: [
          { level: PlanLevel.Free, value: true },
          { level: PlanLevel.Enterprise, value: true },
          { level: PlanLevel.Custom, value: true },
        ],
      },
    ];

    if (independentRender) {
      options.forEach(item => {
        item.support = item.support.filter(support => support.level === currentPlanLevel);
      });
    }

    return options;
  };

  const beyondProfileLaunchLimit = () => {
    const options = [
      {
        level: PlanLevel.Free,
        value: freePlan?.dailyOpenUnit,
        dailyOpenOnceUnit: freePlan?.dailyOpenOnceUnit,
      },
      {
        level: PlanLevel.Enterprise,
        value: enterprisePlan?.dailyOpenUnit,
        dailyOpenOnceUnit: enterprisePlan?.dailyOpenOnceUnit,
      },
      {
        level: PlanLevel.Custom,
        value: customPlan?.dailyOpenUnit,
        dailyOpenOnceUnit: customPlan?.dailyOpenOnceUnit,
      },
    ];

    if (independentRender) {
      return options.filter(item => item.level === currentPlanLevel);
    }

    return options;
  };

  function formatUnlimited(value: number | undefined, customText?: string) {
    const text = customText || t('pricing.unlimited');
    return unlimitedFlag.includes(value as number) ? text : value;
  }
  function handleFilterLevel(filterKey: keyof SubscribedPlan) {
    const options = [
      {
        level: PlanLevel.Free,
        sourceValue: freePlan?.[filterKey],
        value: formatUnlimited(freePlan?.[filterKey] as number),
      },

      {
        level: PlanLevel.Enterprise,
        sourceValue: enterprisePlan?.[filterKey],
        value: formatUnlimited(enterprisePlan?.[filterKey] as number),
      },
      {
        level: PlanLevel.Custom,
        sourceValue: customPlan?.[filterKey],
        value: formatUnlimited(customPlan?.[filterKey] as number),
      },
    ];

    if (independentRender) {
      return options.filter(item => item.level === currentPlanLevel);
    }

    return options;
  }

  return (
    <div className={combineClasses('plan-compare-content mt-12', independentRender && styles['single'], className)}>
      <div className="profiles-wrap">
        <div className="title rounded py-3 px-4 flex items-center space-x-2 bg-[#F5F7F9]">
          <MySvg src="/assets/icons/pricing/profile.svg" className="w-6 h-6" />
          <span className="text-xl font-medium leading-7">{t('pricing.profiles')}</span>
        </div>
        <div>
          <div className="flex">
            <div className={combineClasses('font-medium leading-5.5', styles['title-column'])}>
              {t('pricing.browserProfile')}
            </div>
            {browserProfile.map(item => (
              <div key={item.level} className={combineClasses(styles['column-item'], styles['average-item'], 'flex-1')}>
                {item.value}
              </div>
            ))}
          </div>
          <div className="flex">
            <div className={combineClasses('font-medium leading-5.5', styles['title-column'])}>
              <span>{t('pricing.differentProfileLaunchLimit')}</span>
            </div>
            {differentProfileLaunchLimit.map(item => {
              return item.level === PlanLevel.Custom ? (
                <div
                  key={item.level}
                  className={combineClasses(styles['column-item'], styles['average-item'], 'flex-1')}>
                  {formatUnlimited(-1)}
                </div>
              ) : (
                <div
                  key={item.level}
                  className={combineClasses(styles['column-item'], styles['average-item'], 'flex-1')}>
                  <span>{item.value}</span>
                  <span>{t('pricing.onceDaily')}</span>
                </div>
              );
            })}
          </div>
          <div className="flex">
            <div className={combineClasses('font-medium leading-5.5', styles['title-column'])}>
              {t('pricing.beyondProfileLaunchLimit')}
            </div>

            {beyondProfileLaunchLimit().map(item => (
              <div key={item.level} className={combineClasses(styles['column-item'], styles['average-item'], 'flex-1')}>
                {item.level === PlanLevel.Custom || unlimitedFlag.includes(item.value || -1) ? (
                  formatUnlimited(-1)
                ) : (
                  <>
                    <div className={combineClasses('flex space-x-1 ', styles['pricing-unit'])}>
                      <span className="font-medium">{'$' + item.value}</span>
                      <span>{t('pricing.each')}</span>
                    </div>
                    <div>
                      <span className="font-medium">{'$' + item.dailyOpenOnceUnit}</span>
                      <span className="pl-1">{t('pricing.eachOneTime')}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-solid border-[#F58B29] bg-[#FEF7ED] rounded px-4 py-3 text-xs">
          <div>
            <span className="text-[#F58B29]">* {t('pricing.differentProfileLaunchLimit')}：</span>
            <span className="text-[var(--text-color-3)]">{t('pricing.differentProfileLaunchLimitTips')}</span>
          </div>
          <div className='mt-3'>
            <span className="text-[#F58B29]">* {t('pricing.beyondProfileLaunch')}：</span>
            <span className="text-[var(--text-color-3)]">{t('pricing.beyondProfileLaunchTips')}</span>
          </div>
          <div className='mt-3'>
            <span className="text-[#F58B29]">* {t('pricing.oneTimeProfiles')}：</span>
            <span className="text-[var(--text-color-3)]">{t('pricing.oneTimeProfilesTips')}</span>
          </div>
        </div>
      </div>

      <div className="team-wrap mt-12">
        <div className="title rounded bg-[#F5F7F9] py-3 px-4 flex items-center space-x-2">
          <MySvg src="/assets/icons/pricing/team.svg" className="w-6 h-6" />
          <span className="text-xl font-medium leading-7">{t('pricing.detailTeam')}</span>
        </div>
        <div>
          <div className="flex">
            <div className={combineClasses('font-medium leading-5.5', styles['title-column'])}>
              {t('pricing.detailTeam')}
            </div>
            {team.map(item => (
              <div key={item.level} className={combineClasses(styles['column-item'], styles['average-item'], 'flex-1')}>
                {item.value}
              </div>
            ))}
          </div>
          <div className="flex">
            <div className={combineClasses('font-medium leading-5.5', styles['title-column'])}>
              {t('pricing.detailTeamMember')}
            </div>
            {memberCap.map(item => (
              <div key={item.level} className={combineClasses(styles['column-item'], styles['average-item'], 'flex-1')}>
                {item.value}
              </div>
            ))}
          </div>
          <div className="flex">
            <div className={combineClasses('font-medium leading-5.5', styles['title-column'])}>
              {t('pricing.beyondTeamMemberLimit')}
            </div>
            {memberUnit.map(item => (
              <div key={item.level} className={combineClasses(styles['column-item'], styles['average-item'], 'flex-1')}>
                {item.level === PlanLevel.Custom || unlimitedFlag.includes((item.sourceValue as number) || -1) ? (
                  formatUnlimited(-1)
                ) : (
                  <>
                    <span className="font-medium">{'$' + item.value}</span>
                    <span>({t('pricing.memberDaily')})</span>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="border border-solid border-[#F58B29] bg-[#FEF7ED] rounded px-4 py-3 text-xs">
            <span className="text-[#F58B29]">* {t('pricing.beyondTeamMember')}：</span>
            <span className="text-[var(--text-color-3)]">{t('pricing.beyondTeamMemberTips')}</span>
          </div>
        </div>

        <div className="feature-wrap mt-12">
          <div className="title rounded bg-[#F5F7F9] py-3 px-4 flex items-center space-x-2">
            <MySvg src="/assets/icons/pricing/feature.svg" className="w-6 h-6" />
            <span className="text-xl font-medium leading-7">{t('pricing.feature')}</span>
          </div>
          {features().map((feature, index) => {
            return <PricingFeatureItem feature={feature} key={index} independentRender={independentRender} />;
          })}
        </div>

        <div className="support-wrap mt-12">
          <div className="title rounded bg-[#F5F7F9] py-3 px-4 flex items-center space-x-2">
            <MySvg src="/assets/icons/pricing/support.svg" className="w-6 h-6" />
            <span className="text-xl font-medium leading-7">{t('pricing.support')}</span>
          </div>
          {support().map((feature, index) => {
            return <PricingFeatureItem feature={feature} key={index} independentRender={independentRender} />;
          })}
        </div>
      </div>
    </div>
  );
}

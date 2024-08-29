import { PlanLevel } from '@/enums/billingEnum';
import { combineClasses } from '@/lib/utils';
import styles from './styles.module.css';
import MySvg from '../my-svg';

interface PricingFeatureItemProps {
  feature: {
    locale: string;
    support: {
      level: PlanLevel;
      value: boolean;
    }[];
  };
  independentRender: boolean;
}
export default function PricingFeatureItem({ feature, independentRender }: PricingFeatureItemProps) {
  return (
    <div className={combineClasses(independentRender && styles['singer-feature-item'])}>
      <div className="flex">
        <div className={combineClasses(styles['column-item'], styles['title-column'], 'flex-1')}>{feature.locale}</div>
        {feature.support.map((support, index) => (
          <div key={index} className={combineClasses('flex-1', styles['column-item'], styles['icon-item'])}>
            <MySvg
              src={support.value ? '/assets/icons/pricing/correct.svg' : '/assets/icons/pricing/error.svg'}
              className="w-6 h-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import { useTranslations } from 'next-intl';
import { combineClasses } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import styles from './styles.module.css';

export default function PricingContact() {
  const t = useTranslations();

  return (
    <div className={combineClasses('flex min-h-[284px]', styles['contact-wrap'])}>
      <div className="py-12 px-10">
        <div className="title mb-3 text-[32px] font-semibold leading-10">{t('pricing.contactOurSalesTeam')}</div>
        <div className="mb-6 text-base leading-6 opacity-80">{t('pricing.contactOurSalesTeamDesc')}</div>
        <Link href='/book-a-demo'>
          <Button>{t('pricing.contactUsBtnText')}</Button>
        </Link>
      </div>
      <Image
        className="hidden l:block min-w-[468px] min-h-[264px]"
        width={468}
        height={264}
        quality={100}
        alt={t('pricing.contactOurSalesTeam')}
        src="/assets/images/pricing-contact-us.png"
      />
    </div>
  );
}

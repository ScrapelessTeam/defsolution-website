import { useTranslations } from 'next-intl';
import { combineClasses } from '@/lib/utils';
import MyCollapsed from '../my-collapsed/collapsed';

export default function PricingFAQ({ className }: { className?: string }) {
  const t = useTranslations();
  const faqData = [
    {
      title: t('pricing.faqTitle1'),
      content: t('pricing.faqContent1'),
    },
    {
      title: t('pricing.faqTitle2'),
      content: t('pricing.faqContent2'),
    },
    {
      title: t('pricing.faqTitle3'),
      content: t('pricing.faqContent3'),
    },
    {
      title: t('pricing.faqTitle4'),
      content: t('pricing.faqContent4'),
    },
  ];
  return (
    <div className={combineClasses(className)}>
      <div className="title text-[48px] font-semibold leading-[60px] text-center mb-12">{t('pricing.faq')}</div>
      {faqData.map(item => {
        return (
          <MyCollapsed
            key={item.title}
            isWhiteArrow={false}
            className="py-6 px-9 hover:bg-[#F7F8FA]"
            title={<div className="text-xl leading-7 font-medium text-[var(--text-color-1)]">{item.title}</div>}
            content={<div className="text-base font-normal leading-6 text-[var(--text-color-4)]">{item.content}</div>}
          />
        );
      })}
    </div>
  );
}

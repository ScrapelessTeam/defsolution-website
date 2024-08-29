'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import QaIconClose from './qa-icon-close';
import QaIconOpen from './qa-icon-open';

export interface FaqItem {
  title: string;
  content: string;
}

export interface FaqProps {
  faq: FaqItem[];
}

export default function Faq({ faq }: FaqProps) {
  const t = useTranslations();
  return (
    <div>
      <h2 className="mx-auto text-center text-h2 ipad:text-[32px] iph:text-[24px] text-xl !font-semibold">
        {t('faq')}
      </h2>

      <div className="up-down-line">
        <Accordion
          showDivider={false}
          className="px-0 text-red"
          selectionMode="multiple"
          defaultExpandedKeys={[0]}
          itemClasses={{
            title: 'font-semibold text-xl text-[var(--text-color-1)]',
            trigger: 'pb-0 flex-row-reverse transition',
            content: 'pl-[36px] pt-4',
            indicator: 'text-[var(--text-b-2)] data-[open=true]:rotate-0',
          }}>
          {faq.map((f, i) => {
            return (
              <AccordionItem
                className="px-[36px] pb-4 hover:bg-[#F9F9FB]"
                key={i}
                aria-label={''}
                title={f.title}
                indicator={({ isOpen }) => (isOpen ? <QaIconOpen /> : <QaIconClose />)}>
                <span className="text-base text-[var(--text-color-4)] font-normal">{f.content}</span>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

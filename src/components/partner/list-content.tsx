'use client';

import { useState } from 'react';
import { combineClasses } from '@/lib/utils';
import PartnerItem from './item';

import type { Partner } from '@/types/partner';
interface PartnerListContentProps {
  data: Partner[];
}

export default function PartnerListContent({ data }: PartnerListContentProps) {
  const typeList = data.map(item => item.type);
  const typeSet = new Set(typeList);

  const partnerList = data.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, Partner[]>);

  const [currentSelectedType, setCurrentSelectedType] = useState<string>(typeList?.[0] || '');

  function handleTogglePartnerTag(type: string) {
    setCurrentSelectedType(type);
    const tagRef = document.getElementById(type);
    if (tagRef) {
      tagRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  return (
    <div className="list-content">
      <div className="type-list mb-4 gap-2 flex flex-wrap ml:mb-6 ml:gap-3 l:mb-8">
        {Array.from(typeSet).map(type => {
          return (
            <div
              key={type}
              className={combineClasses(
                'l:px-4 l:py-[6px] ml:text-base ml:px-3 text-sm px-2 py-1 leading-6 h-9 rounded border border-solid border-[#E8ECF4] text-[#646E83] cursor-pointer',
                type === currentSelectedType && 'font-medium text-[#1A1A1A] bg-[#F0F2F5]',
              )}
              onClick={() => handleTogglePartnerTag(type)}>
              {type}
            </div>
          );
        })}
      </div>

      <div id="partner-list" className="l:space-y-12 ml:space-y-8 space-y-5 flex flex-col">
        {Object.keys(partnerList).map(key => {
          return <PartnerItem key={key} domId={key} title={key} list={partnerList[key]} />;
        })}
      </div>
    </div>
  );
}

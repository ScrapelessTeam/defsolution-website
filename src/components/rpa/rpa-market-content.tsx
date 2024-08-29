'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { combineClasses } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from '@/navigation';
import SearchInput from '@/components/search-input';

export default function RpaMarketContent() {
  const t = useTranslations();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popular');
  const [collapse, setCollapse] = useState(true);
  const [showCollapse, setShowCollapse] = useState(true);
  const [currentSelectedTag, setCurrentSelectedTag] = useState<string>('All');
  const tagList: string[] = ['All'];

  function onSelectChange(value: string) {
    setSort(value);
  }

  return (
    <div className="container mx-auto">
      <div className="search-wrap flex items-center justify-between space-x-3 w-[80%] mx-auto relative">
        <SearchInput
          className="w-[224px] flex-1"
          value={query}
          onValueChange={setQuery}
          placeholder={t('blog.searchArticles')}
        />

        <Select defaultValue={sort} onValueChange={onSelectChange}>
          <SelectTrigger className="w-[200px] h-[40px] bg-white">
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">{t('rpa.store.mostRect')}</SelectItem>
            <SelectItem value="popular">{t('rpa.store.mostPopular')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="relative flex justify-between mt-12">
        <div className="tag-wrap flex gap-3 w-full flex-wrap min-h-5">
          {tagList.map(tag => {
            return (
              <div
                key={tag}
                className={combineClasses(
                  'l:px-4 l:py-[6px] l:leading-6 l:text-base text-sm px-3 py-1 leading-5.5 rounded border border-solid border-[#E8ECF4] text-[#646E83] cursor-pointer',
                  tag === currentSelectedTag && 'font-medium text-[#1A1A1A] bg-[#F0F2F5]',
                )}>
                {tag}
              </div>
            );
          })}
        </div>

        {showCollapse && (
          <div
            className={combineClasses(
              'transition-all guide-arrow text-white flex items-center justify-center w-6 h-6 rounded border border-solid border-[#E5E6EB] cursor-pointer',
              collapse ? 'rotate-180' : '',
            )}
            onClick={() => {
              setCollapse(!collapse);
            }}>
            <svg
              className="guide-control-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <rect width="16" height="16" transform="translate(16 16) rotate(-180)" fill="currentColor" />
              <path
                d="M7.36679 5.32453L4.16336 9.67366C4.07322 9.79605 4.01791 9.94212 4.00367 10.0954C3.98943 10.2486 4.01683 10.4029 4.08278 10.5409C4.14873 10.6789 4.2506 10.795 4.37688 10.8761C4.50316 10.9572 4.64882 11.0001 4.79741 11L11.2033 11C11.3518 11 11.4974 10.957 11.6235 10.8758C11.7497 10.7946 11.8515 10.6785 11.9174 10.5406C11.9832 10.4027 12.0106 10.2484 11.9963 10.0952C11.9821 9.94201 11.9267 9.796 11.8366 9.67366L8.63322 5.32453C8.55886 5.22362 8.46304 5.14185 8.35322 5.08557C8.2434 5.02928 8.12252 5 8 5C7.87748 5 7.75661 5.02928 7.64678 5.08557C7.53696 5.14185 7.44114 5.22362 7.36679 5.32453Z"
                fill="#86909C"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

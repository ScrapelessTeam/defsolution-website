'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { combineClasses } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import MySvg from '@/components/my-svg';
import SearchInput from '@/components/search-input';
import '@/styles/text.scss';
import { Link } from '@/navigation';

export default function RpaMarketItem({ tags }: { tags: string[] }) {
  const t = useTranslations();
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popular');
  const [collapse, setCollapse] = useState(true);
  const [showCollapse, setShowCollapse] = useState(false);
  const [currentSelectedTag, setCurrentSelectedTag] = useState<string>('All');
  const tagList: string[] = ['All'].concat(tags);

  const [styles, setStyles] = useState<React.CSSProperties>({
    height: '40px',
  });

  function onSelectChange(value: string) {
    setSort(value);
  }

  async function getWorkflows() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(
      `${baseURL}/rpa/templates?categories=${
        currentSelectedTag === 'All' ? '' : currentSelectedTag
      }&pageSize=16&page=${pageNumber}&s=${query}&sort=${sort}`,
    );
    const data = await res.json();
    setWorkflows(data.data?.docs || []);
    setTotal(data.data?.totalDocs || 0);
    setTotalPage(data.data?.totalPages || 0);
  }

  function onPageChange(page: number) {
    setPageNumber(page);
  }

  function onCollapseClick() {
    setCollapse(!collapse);

    if (collapse) {
      const height = document.querySelector('.tag-wrap')?.scrollHeight || 40;
      setStyles({
        height: `${height}px`,
      });
    } else {
      setStyles({
        height: '40px',
      });
    }
  }

  function onTagItemClick(tag: string) {
    setPageNumber(1);
    setCurrentSelectedTag(tag);
  }

  useEffect(() => {
    getWorkflows();
  }, [currentSelectedTag, pageNumber, sort, query]);

  useEffect(() => {
    getWorkflows();
    const tagsTotalWidth = document.querySelector('#tagWrap')?.clientWidth || 0;
    const tagListItems = document.querySelectorAll('.tag-list-item') || [];
    const tagItemsTotalWidth =
      Array.from(tagListItems).reduce((acc, cur) => {
        return acc + cur.clientWidth + 2 + 12;
      }, 0) -
      16 +
      26;

    if (tagItemsTotalWidth > tagsTotalWidth) {
      setShowCollapse(true);
    } else {
      setShowCollapse(false);
      setCollapse(true);
    }
  }, []);

  function onPagePrev() {
    if (pageNumber <= 1) return;
    setPageNumber(pageNumber - 1);
  }

  function onPageNext() {
    if (pageNumber >= totalPage) return;
    setPageNumber(pageNumber + 1);
  }

  return (
    <div id="tagWrap">
      <div className="search-wrap flex items-center iph:flex-nowrap flex-wrap iph:justify-between justify-center gap-3 w-[80%] mx-auto relative my-12">
        <SearchInput
          className="min-w-[224px] flex-1"
          value={query}
          onValueChange={setQuery}
          placeholder={t('rpa.store.searchPlaceholder')}
        />

        <Select defaultValue={sort} onValueChange={onSelectChange}>
          <SelectTrigger className="iph:w-[200px] w-[280px] h-[40px] bg-white">
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">{t('rpa.store.mostRect')}</SelectItem>
            <SelectItem value="popular">{t('rpa.store.mostPopular')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="relative flex justify-between">
        <div className="tag-wrap flex gap-3 w-full flex-wrap overflow-hidden" style={styles}>
          {tagList.map((tag, i) => {
            return (
              <div
                key={i}
                className={combineClasses(
                  'tag-list-item l:px-4 l:py-[6px] l:leading-6 l:text-base text-sm px-3 py-1 leading-5.5 rounded border border-solid border-[#E8ECF4] text-[#646E83] cursor-pointer',
                  tag === currentSelectedTag && 'font-medium text-[#1A1A1A]',
                )}
                onClick={() => {
                  onTagItemClick(tag);
                }}>
                {tag}
              </div>
            );
          })}
        </div>

        {showCollapse && (
          <div
            className={combineClasses(
              'transition-all guide-arrow text-white flex items-center justify-center w-6 h-6 rounded border border-solid border-[#E5E6EB] cursor-pointer mt-2',
              collapse ? 'rotate-180' : '',
            )}
            onClick={onCollapseClick}>
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

      <div className="mt-12">
        <p className="text-[var(--text-color-4)] ipad:text-lg iph:text-base text-[15px] font-semibold">
          {total} Workflows
        </p>

        <div className="mt-6 flex flex-wrap gap-6">
          {workflows.map((w, i) => {
            return (
              <Link href={`/rpa-marketplace/${w.templateId}`} key={i}>
                <div className="cursor-pointer w-[278px] min-h-[180px] p-4 rounded-[8px] border border-solid border-[var(--border-color)] hover:border-none transition-all hover:-translate-y-3 hover:shadow-box bg-[var(--bg-primary)] hover:bg-white">
                  <div className="flex gap-3">
                    <Image src={w.imgUrl} alt="" quality={100} width={44} height={44} className="h-fit" />
                    <p className="text-base text-[var(--text-color-1)] font-medium flex-1">{w.name}</p>
                  </div>

                  <p className="text-ellipsis-2 text-sm text-[var(--text-color-3)] mt-4 h-[42px]">{w.shortDesc}</p>

                  <div className="flex justify-between mt-4">
                    <p className="text-[var(--text-color-1)] text-sm text-ellipsis overflow-hidden whitespace-normal">
                      {w.category}
                    </p>

                    <div className="flex">
                      <MySvg src="/assets/icons/avator.svg" />
                      <p className="text-sm text-[var(--text-color-3)]">{w.used}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12">
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious className={pageNumber <= 1 ? 'cursor-not-allowed' : ''} onClick={onPagePrev} />
              </PaginationItem>
              <PaginationItem className="flex gap-1">
                {Array.from({ length: totalPage }, (_, index) => index + 1).map(n => {
                  return (
                    <PaginationLink
                      key={n}
                      onClick={() => {
                        onPageChange(n);
                      }}
                      className={
                        n === pageNumber
                          ? 'border border-solid border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)]'
                          : ''
                      }>
                      {n}
                    </PaginationLink>
                  );
                })}
              </PaginationItem>
              <PaginationItem>
                <PaginationNext className={pageNumber >= totalPage ? 'cursor-not-allowed' : ''} onClick={onPageNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

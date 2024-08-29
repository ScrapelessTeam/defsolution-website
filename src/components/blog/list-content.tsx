'use client';

import { useEffect, useState, useRef } from 'react';
import { useDebounce } from 'ahooks';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import SearchInput from '../search-input';
import Spin from '../spin';
import { combineClasses } from '@/lib/utils';
import BlogListItem from './list-item';
import { Button } from '../ui/button';

interface BlogTagItem {
  label: string;
  value: string;
}

export default function BlogListContent({ locale, tag: blogTag }: { locale: string; tag: string }) {
  const t = useTranslations();

  const [currentSelectedTag, setCurrentSelectedTag] = useState<string>('All');
  const [pageSize, setPageSize] = useState<number>(6);
  const [tagSpinning, setTagSpinning] = useState<boolean>(false);
  const [tagList, setTagList] = useState<BlogTagItem[]>([]);
  const [blogListData, setBlogListData] = useState<any[]>([]);
  const [blogListSpinning, setBlogListSpinning] = useState<boolean>(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [loadMoreBtnLoading, setLoadMoreBtnLoading] = useState(false);
  const [query, setQuery] = useState('');
  const debounceQuery = useDebounce(query, { wait: 500 });

  useEffect(() => {
    async function getTagList() {
      setTagSpinning(true);
      try {
        const param = {
          lang: locale,
        } as any;
        const queryStr = new URLSearchParams(param).toString();
        const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${baseURL}/posts/tags?${queryStr}`, {
          method: 'GET',
        });
        const data = await res.json();
        if (data?.data) {
          const tags = [{ label: 'All', value: 'All' }];
          setTagList(tags.concat(data.data));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTagSpinning(false);
      }
    }
    getTagList();
  }, [locale]);

  const flag = useRef(false);
  useEffect(() => {
    // const tag = blogTag.toLowerCase() === 'all' ? 'All' : blogTag;
    setCurrentSelectedTag(blogTag.replaceAll('%20', ' '));
    // const _tag = blogTag
    async function getBlogListData() {
      flag.current = true;
      setBlogListSpinning(true);
      setLoadMoreBtnLoading(true);
      try {
        const param = {
          tags: blogTag.replaceAll('%20', ' ') === 'All' ? '' : blogTag.replaceAll('%20', ' '),
          s: debounceQuery,
          lang: locale,
          page: 1,
          pageSize,
        } as any;
        const queryStr = new URLSearchParams(param).toString();
        const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${baseURL}/posts?${queryStr}`, {
          method: 'GET',
        });
        const data = await res.json();
        setBlogListData(data?.data?.docs || []);
        if (data.data?.totalDocs > pageSize) {
          setShowLoadMore(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setBlogListSpinning(false);
        setLoadMoreBtnLoading(false);
        flag.current = false;
      }
    }
    !flag.current && getBlogListData();
  }, [locale, pageSize, debounceQuery, currentSelectedTag, blogTag]);

  function handleLoadMore() {
    setPageSize(pageSize + 6);
  }

  return (
    <>
      <div className="search-wrap mb-8">
        <SearchInput
          className="w-[224px]"
          value={query}
          onValueChange={setQuery}
          placeholder={t('blog.searchArticles')}
        />
      </div>

      <Spin spinning={tagSpinning}>
        <div className="l:mb-8 ml:mb-6 mb-4 tag-wrap flex gap-3 w-full flex-wrap min-h-5">
          {tagList.map((tag, i) => {
            return (
              <Link key={i} href={`/blog/tag/${tag.value}`} prefetch={false}>
                <div
                  className={combineClasses(
                    'l:px-4 l:py-[6px] l:leading-6 l:text-base text-sm px-3 py-1 leading-5.5 rounded border border-solid border-[#E8ECF4] text-[#646E83] cursor-pointer',
                    tag.value === currentSelectedTag && 'font-medium text-[#1A1A1A] bg-[#F0F2F5]',
                  )}>
                  {tag.label}
                </div>
              </Link>
            );
          })}
        </div>
      </Spin>

      <div className="l:mb-[100px] ml:mb-[80px] mb-[40px]">
        <div>{blogListData.length === 0 && <p>{t('blog.noData')}</p>}</div>
        <Spin spinning={blogListSpinning}>
          <div className="list-content min-h-[200px]">
            <div className="l:grid-cols-3 l:gap-x-8 l:gap-y-12 ml:grid-cols-3 ml:gap-x-4 ml:gap-y-6 m:grid-cols-2 grid grid-cols-1 gap-4 blog-list-wrap">
              {blogListData.map(item => {
                return <BlogListItem locale={locale} key={item.postId} item={item} />;
              })}
            </div>
            {showLoadMore && (
              <div className="flex justify-center mt-5">
                <Button variant="outline" onClick={handleLoadMore} loading={loadMoreBtnLoading}>
                  {t('blog.more')}
                </Button>
              </div>
            )}
          </div>
        </Spin>
      </div>
    </>
  );
}

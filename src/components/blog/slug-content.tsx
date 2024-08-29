'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MdCatalog } from 'md-editor-rt';
import { formatTime } from '@/lib/time';
import { combineClasses } from '@/lib/utils';
import MarkdownPreview from '@/components/markdown-preview';
import BlogTag from '@/components/blog/tag';
import BlogAuthor from '@/components/blog/author';
import BlogListItem from '@/components/blog/list-item';
import useDebounceFn from 'ahooks/lib/useDebounceFn';

interface BlogTagItem {
  label: string;
  value: string;
}

export default function SlugContent({
  locale,
  slugDetailData,
  blogListData,
}: {
  locale: string;
  slugDetailData: any;
  blogListData: any;
}) {
  const t = useTranslations();
  const [currentActiveCatalog, setCurrentActiveCatalog] = useState<string>('');

  const debounceWatchScroll = useDebounceFn(handleWatchScroll, { wait: 100 });

  function handleWatchScroll() {
    const observer = new IntersectionObserver(scrollToActiveElement, { root: document.querySelector('.wrapper') });

    //   // 1. 获取目录元素
    const wrapper = document.querySelector('.blog-detail-catalog');

    // 2. 获取目录元素下的所有锚点元素
    const links = wrapper?.querySelectorAll('.md-editor-catalog-link');
    if (!links || !wrapper) {
      return;
    }

    links.forEach(function (item) {
      observer.observe(item);
    });

    function scrollToActiveElement(entries: any) {
      entries.forEach(function (entry: any) {
        if (entry.target.classList.contains('md-editor-catalog-active') && !entry.isIntersecting) {
          entry.target.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      });
    }
  }

  function handleActiveCatalog(e: any) {
    if (!e) return;
    setCurrentActiveCatalog(e.text);
  }

  useEffect(() => {
    document.addEventListener('scroll', debounceWatchScroll.run);
    return () => {
      document.removeEventListener('scroll', debounceWatchScroll.run);
    };
  }, [currentActiveCatalog]);

  return (
    <div className="container mx-auto l:space-x-12 ml:space-x-8 m:space-x-4 space-x-2 flex ">
      <div className={combineClasses('blog-preview flex-1 l:max-w-[888px]')}>
        <div className="min-h-[200px]">
          <div className="banner mb-6 rounded-xl max-h-[500px] overflow-hidden relative">
            {slugDetailData?.data?.previewImgUrl && (
              <Image
                className="w-full h-full object-cover rounded-xl"
                width={888}
                height={500}
                quality={100}
                src={slugDetailData?.data?.previewImgUrl}
                alt={slugDetailData?.data?.previewImgAlt}
              />
            )}
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex w-full gap-2">
              {slugDetailData?.data?.tags.slice(0, 3).map((tag: BlogTagItem, i: number) => (
                <BlogTag key={i} tag={tag.value} locale={locale}>
                  {tag.label}
                </BlogTag>
              ))}
            </div>
            <h1 className="l:leading-9 my-sem-medium-text font-medium line-clamp-2">{slugDetailData?.data?.title}</h1>
            <div className="l:font-normal l:text-base l:leading-6 line-clamp-2">{slugDetailData?.data?.preview}</div>
            <div className="time text-[#646E83]">
              <span>{formatTime(slugDetailData?.data?.createdAt, 'MMM DD, YYYY')}</span>
              <BlogAuthor author={slugDetailData?.data?.author} />
            </div>
          </div>

          <div className="l:mt-12 bg-[#F1F3F5] h-[1px]"></div>

          {slugDetailData?.data?.content && (
            <MarkdownPreview
              className="blog-detail-preview-wrapper my-editor-preview"
              editorId="blogPreview"
              modelValue={slugDetailData?.data?.content}
            />
          )}
        </div>

        <div className="l:my-12 ml:mb-10 m:mb-8 mb-4 bg-[#F1F3F5] h-[1px]"></div>
        <div className="mb-6 my-sem-medium-text font-medium leading-9">{t('blog.more')}</div>
        {blogListData?.data?.docs && (
          <div className="l:grid-cols-3 l:gap-x-6 l:gap-y-8 l:mb-12 ml:grid-cols-2 ml:mb-10 m:mb-8 grid grid-cols-1 gap-6 mb-4 blog-list-wrap min-h-[200px]">
            {blogListData?.data?.docs?.map((item: any) => {
              return <BlogListItem className="w-[280px] h-[143px]" key={item.postId} item={item} locale={locale} />;
            })}
          </div>
        )}
      </div>

      <div className="min-w-[180px] hidden m:block catalog">
        <div className="catalog-wrap pr-2 max-w-[248px] fixed">
          <div
            className="wrapper"
            style={{
              maxHeight: 'calc(100vh - 200px)',
              overflowY: 'scroll',
            }}>
            <div className="font-semibold leading-6 text-base mb-4">{t('blog.catalog')}</div>
            <MdCatalog
              className="blog-detail-catalog text-[#646E83]"
              editorId="blogPreview"
              offsetTop={130}
              scrollElementOffsetTop={130}
              scrollElement="html"
              onActive={handleActiveCatalog}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

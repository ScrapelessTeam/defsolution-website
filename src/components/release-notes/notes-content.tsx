'use client';
import { useEffect, useState } from 'react';
import { combineClasses } from '@/lib/utils';
import { config } from 'md-editor-rt';
import MarkdownPreview from '../markdown-preview';

interface ReleaseNotesContensProps {
  locale: string;
  releaseNotesData: {
    catalog: {
      text: string;
      children: { text: string }[];
    }[];
    content: string;
  };
}

export default function ReleaseNotesContens({ releaseNotesData, locale }: ReleaseNotesContensProps) {
  const mdLang = locale === 'zh' ? 'zh-CN' : 'en-US';

  config({
    markdownItPlugins(plugins) {
      return plugins.map(p => {
        if (p.type === 'xss') {
          return {
            ...p,
            options: {
              extendedWhiteList: {
                div: ['class', 'id'],
                img: ['onerror'],
              },
            },
          };
        }

        return p;
      });
    },
  });

  const [catalogData, setCatalogData] = useState<
    {
      text: string;
      collapsed: boolean;
      maxHeight: string;
      children: { text: string }[];
    }[]
  >([]);

  function handleScrollTo(anchor: string) {
    const target = document.getElementById(anchor);
    if (target) {
      const targetScrollPosition = target.offsetTop + 300;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });
    }
  }

  function handleCollapsed(current: any) {
    const data = catalogData.map(item => {
      if (item.text === current.text) {
        return {
          ...item,
          collapsed: !item.collapsed,
        };
      } else {
        return {
          ...item,
          collapsed: true,
        };
      }
    });

    setCatalogData(data);
  }

  useEffect(() => {
    if (releaseNotesData.catalog) {
      const data = releaseNotesData.catalog?.map((item, index) => {
        return {
          ...item,
          collapsed: index !== 0,
          maxHeight: `${(item.children?.length || 1) * 40}px`,
        };
      });
      setCatalogData(data);
    }
  }, [releaseNotesData.catalog]);

  return (
    <div className="lg:pr-[200px] pr-0 flex justify-between space-x-10">
      <MarkdownPreview
        className="flex-1 my-editor-preview !bg-transparent"
        editorId="release-detail-preview"
        modelValue={releaseNotesData?.content}
        preview-only
        language={mdLang}
      />

      <div className="border-l-2 border-solid border-[#F1F3F5] min-w-[200px] sticky top-[70px] self-start">
        {catalogData.length > 0 && (
          <div className="pl-6">
            {catalogData.map((item: any) => {
              return (
                <div key={item.text} className="mt-4 first:mt-0">
                  <div
                    className="relative mb-4 flex cursor-pointer items-center text-lg font-semibold selected"
                    onClick={() => handleCollapsed(item)}>
                    <span>{item.text}</span>
                    <svg
                      className={combineClasses(
                        'overflow-hidden transition-transform ml-1',
                        item.collapsed ? 'rotate-0' : '-rotate-180',
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none">
                      <path
                        d="M7.51983 5.66854L3.75317 9.44187C3.69068 9.50384 3.64109 9.57758 3.60724 9.65882C3.57339 9.74006 3.55597 9.82719 3.55597 9.9152C3.55597 10.0032 3.57339 10.0903 3.60724 10.1716C3.64109 10.2528 3.69068 10.3266 3.75317 10.3885C3.87808 10.5127 4.04704 10.5824 4.22317 10.5824C4.39929 10.5824 4.56826 10.5127 4.69317 10.3885L8.0265 7.08854L11.3265 10.3885C11.4514 10.5127 11.6204 10.5824 11.7965 10.5824C11.9726 10.5824 12.1416 10.5127 12.2665 10.3885C12.3295 10.3268 12.3796 10.2532 12.4139 10.1719C12.4483 10.0907 12.4661 10.0034 12.4665 9.9152C12.4661 9.827 12.4483 9.73974 12.4139 9.65849C12.3796 9.57724 12.3295 9.50361 12.2665 9.44187L8.49983 5.66854C8.43741 5.60087 8.36164 5.54686 8.27731 5.50992C8.19297 5.47298 8.1019 5.45391 8.00983 5.45391C7.91777 5.45391 7.8267 5.47298 7.74236 5.50992C7.65803 5.54686 7.58226 5.60087 7.51983 5.66854Z"
                        fill="#646E83"
                      />
                    </svg>
                  </div>
                  <div
                    className="grid grid-cols-1 gap-4 overflow-hidden transition-max-height sm1:grid-cols-2"
                    style={{
                      maxHeight: item.collapsed ? '0' : item.maxHeight,
                    }}>
                    {item?.children?.map((c: any) => {
                      return (
                        <div key={c.text} className="flex items-center" onClick={() => handleScrollTo(c.text)}>
                          <div className="flex-1 hover:underline cursor-pointer ml-4">
                            <div className="text-sm">{c.text}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

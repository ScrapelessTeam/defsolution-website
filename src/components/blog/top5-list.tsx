'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { formatTime } from '@/lib/time';
import Spin from '@/components/spin';
import BlogTag from './tag';
import BlogAuthor from './author';
import BlogTopAdvertisement from './top-advertisement';
import BlogListItem from './list-item';

interface BlogTagItem {
  label: string;
  value: string;
}

export default function BlogTop5List({ locale }: { locale: string }) {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [top1AdvertisementData, setTop1AdvertisementData] = useState<any>(null);
  const [topOtherAdvertisementData, setTopOtherAdvertisementData] = useState<any>(null);
  const [top5BlogListData, setTop5BlogListData] = useState<any>(null);

  useEffect(() => {
    getTop5BlogListData();
  }, []);

  async function getTop5BlogListData() {
    setSpinning(true);
    try {
      const param = {
        lang: locale,
        page: 1,
        top: true,
        limit: 5,
      } as any;
      const queryStr = new URLSearchParams(param).toString();
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const res = await fetch(`${baseURL}/posts?${queryStr}`, {
        method: 'GET',
      });

      const data = await res.json();
      if (data?.data?.docs?.length) {
        setTop5BlogListData(data.data.docs);
        setTop1AdvertisementData(data.data.docs[0]);
        setTopOtherAdvertisementData(data.data.docs.slice(1));
      }
    } catch (error) {
    } finally {
      setSpinning(false);
    }
  }

  return (
    <Spin spinning={spinning}>
      <div className="hidden l:block min-h-[500px]">
        <div className="l:space-x-12 flex justify-between">
          {top1AdvertisementData && (
            <Link href={`/blog/${top1AdvertisementData.slug}`} className="flex-1" prefetch={false}>
              <div className="l:flex l:space-y-3 l:max-w-[688px] overflow-hidden flex-col cursor-pointer hover-translate">
                <div className="l:flex-col l:space-y-5 flex">
                  <div className="rounded-lg l:h-[388px]">
                    {top1AdvertisementData?.previewImgUrl && (
                      <Image
                        width={688}
                        height={388}
                        quality={100}
                        src={top1AdvertisementData?.previewImgUrl}
                        alt={top1AdvertisementData?.previewImgAlt}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <div className="flex gap-2 w-full whitespace-nowrap">
                    {top1AdvertisementData?.tags?.slice(0, 3).map((tag: BlogTagItem, i: number) => (
                      <BlogTag key={i} tag={tag.value} locale={locale}>
                        {tag.label}
                      </BlogTag>
                    ))}
                  </div>
                </div>
                <div className="l:font-semibold l:text-2.5xl l:leading-9 line-clamp-2">
                  {top1AdvertisementData?.title}
                </div>
                <div className="l:font-normal l:text-base l:leading-6 line-clamp-2">
                  {top1AdvertisementData?.preview}
                </div>
                <div className="time text-[#646E83]">
                  <span>{formatTime(top1AdvertisementData?.createdAt, 'MMM DD, YYYY')}</span>
                  <BlogAuthor author={top1AdvertisementData?.author} />
                </div>
              </div>
            </Link>
          )}
          <div className="l:flex-col l:space-y-6 flex l:w-[448px]">
            {topOtherAdvertisementData?.map((item: any) => {
              return <BlogTopAdvertisement key={item.postId} item={item} locale={locale} />;
            })}
          </div>
        </div>
      </div>
      <div className="block l:hidden">
        <div className="ml:gap-6 ml:grid-cols-3 m:grid-cols-2 grid grid-cols-1 gap-4">
          {top5BlogListData?.map((item: any) => {
            return <BlogListItem key={item.postId} item={item} locale={locale} showSubTitle={false} />;
          })}
        </div>
      </div>
    </Spin>
  );
}

import { Link } from '@/navigation';
import Image from 'next/image';
import { formatTime } from '@/lib/time';
import BlogTag from './tag';
import BlogAuthor from './author';

interface BlogTagItem {
  label: string;
  value: string;
}

interface BlogTopAdvertisementProps {
  locale: string;
  item: {
    title: string;
    slug: string;
    preview: string;
    previewImgUrl: string;
    previewImgAlt: string;
    status: number;
    tags: BlogTagItem[];
    metadata?: {
      title: string;
      description: string;
      keywords: string;
    };
    lang: string;
    postId: string;
    createdAt: string;
    updatedAt: string;
    statusDesc: string;
    id: null;
    author?: string;
  };
}

export default function BlogTopAdvertisement({ item, locale }: BlogTopAdvertisementProps) {
  return (
    <Link href={`/blog/${item.slug}`}>
      <div className="l:space-x-4 l:h-[116px] flex justify-between cursor-pointer hover-translate">
        <div className="rounded-lg w-[206px] max-h-[116px] relative overflow-hidden">
          <Image
            src={item.previewImgUrl}
            className="object-cover rounded-lg"
            fill
            priority
            quality={100}
            alt={item.previewImgAlt}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 206px"
          />
        </div>
        <div className="l:w-[228px] flex flex-col space-y-2">
          <div className="tag flex space-x-2">
            {item.tags?.slice(0, 3).map((tag, i) => {
              return (
                <BlogTag key={i} tag={tag.value} locale={locale}>
                  {tag.label}
                </BlogTag>
              );
            })}
          </div>
          <div className="title font-medium leading-6 text-base line-clamp-2">{item.title}</div>
          <div className="time text-[#646E83] text-sm flex justify-between items-center">
            <BlogAuthor author={item.author} />
            <span>{formatTime(item.createdAt, 'MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

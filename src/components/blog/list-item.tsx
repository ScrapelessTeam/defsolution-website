import Image from 'next/image';
import { formatTime } from '@/lib/time';
import { combineClasses } from '@/lib/utils';
import { Link } from '@/navigation';
import BlogTag from './tag';
import BlogAuthor from './author';

interface BlogTagItem {
  label: string;
  value: string;
}

interface BlogListItemProps {
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
  showSubTitle?: boolean;
  locale: string;
  className?: string;
}
export default function BlogListItem({ item, showSubTitle = true, locale, className }: BlogListItemProps) {
  return (
    <div className="cursor-pointer hover-translate">
      <Link href={`/blog/${item.slug}`} prefetch={false}>
        <div className="l:space-y-3 space-y-2 flex flex-col justify-between">
          <div className="l:space-y-5 ml:space-y-4 space-y-3 flex flex-col">
            <div
              className={combineClasses(
                'l:w-full h-[212px] max-w-[378px] overflow-hidden rounded-lg flex relative',
                className,
              )}>
              <Image
                src={item.previewImgUrl}
                fill
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 378px"
                className="object-cover rounded-lg"
                alt={item.previewImgAlt}
              />
            </div>
            <div className="flex gap-2 w-full overflow-hidden">
              {item?.tags?.slice(0, 3).map((tag, i) => (
                <BlogTag key={i} tag={tag.value} locale={locale}>
                  {tag.label}
                </BlogTag>
              ))}
            </div>
          </div>
          <div className="l:text-lg l:leading-[26px] h-[52px] font-medium text-lg line-clamp-2">{item.title}</div>

          {showSubTitle && <div className="font-normal h-[44px] leading-5.5 text-sm line-clamp-2">{item?.preview}</div>}

          <div className="time text-[#646E83]">
            <span>{formatTime(item.createdAt, 'MMM DD, YYYY')}</span>
            <BlogAuthor author={item.author} />
          </div>
        </div>
      </Link>
    </div>
  );
}

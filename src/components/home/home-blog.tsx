import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import BlogItem from '@/components/blog-item';

export default function HomeBlog({ blogs }: { blogs: any[] }) {
  const t = useTranslations();

  return (
    <div className="ipad:block iph:block hidden mx-auto container pt-[120px]">
      <h2 className="mx-auto text-h2 ipad:text-[32px] iph:text-[24px] text-xl ipad:w-[823px] iph:w-[740px] text-center">
        {t('Index.blog.title')}
      </h2>

      <div className="mt-[48px]">
        {blogs.map((b, i) => {
          return (
            <BlogItem
              key={i}
              title={b.title}
              content={b.preview}
              tags={b.tags}
              src={b.previewImgUrl}
              date={b.updatedAt}
              slug={b.slug}
            />
          );
        })}
      </div>

      <div className="mt-[48px] flex justify-center">
        <Link href="/blog/tag/All">
          <Button
            className="min-w-[115px] h-[46px] px-2 text-sm ml-4 border hover:bg-[var(--primary-color)] hover:text-white"
            color="primary"
            variant="ghost">
            {t('all-blog')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

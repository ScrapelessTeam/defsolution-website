import React, { ReactNode } from 'react';
import { Link, useRouter } from '@/navigation';

interface BlogTagProps {
  tag: string;
  locale: string;
  children: ReactNode;
}

const BlogTag: React.FC<BlogTagProps> = ({ tag, children, locale }) => {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLSpanElement>) {
    e.preventDefault();
    router.push(`/blog/tag/${tag}`, { locale: locale });
  }

  return (
    <span
      className="blog-tag truncate py-1 px-2 rounded bg-[#F0F2F5] text-xs font-normal leading-5"
      onClick={handleClick}>
      {children}
    </span>
  );
};

export default BlogTag;

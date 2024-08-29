import React, { ReactNode } from 'react';

interface BlogAuthorProps {
  author?: string;
}

const BlogAuthor: React.FC<BlogAuthorProps> = ({ author }) => {
  return author && <span className="text-[#646E83] font-semibold pl-6 text-sm">{author}</span>;
};

export default BlogAuthor;

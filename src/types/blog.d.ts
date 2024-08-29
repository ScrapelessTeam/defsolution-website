export interface Blog {
  postId: string;
  title: string;
  content: string;
  slug: string;
  preview: string;
  previewImg?: string;
  previewImgAlt?: string;
  status: PostStatus;
  tags: string[];
  metadata: PostMetadata;
  lang: string;
  resources: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
  author?: string;
}

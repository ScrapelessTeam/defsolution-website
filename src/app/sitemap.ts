import { MetadataRoute } from 'next';
import { locales, host, productList, featureList, baseRoutes, solutionList } from '@/config';

import type { Blog } from '@/types/blog';

interface BlogTagItem {
  label: string;
  value: string;
}

// Adapt this as necessary
const pathnames = ['/'];
const productPaths = productList.map(item => `/product/${item}`);
const featurePaths = featureList.map(item => `/feature/${item}`);
const solutionPaths = solutionList.map(item => `/solution/${item}`);

async function getAllPosts() {
  let posts: any = {};
  let page = 1;
  const limit = 50;
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const recFetch = async (local: string) => {
    const param = {
      tags: '',
      page,
      limit,
      lang: local,
    } as any;
    const queryStr = new URLSearchParams(param).toString();
    const res = await fetch(`${baseURL}/posts?${queryStr}`, {
      method: 'GET',
    });

    const blogListData = await res.json();

    blogListData?.data?.docs.forEach((i: Blog) => {
      if (posts.hasOwnProperty(`/blog/${i.slug}`)) {
        posts[`/blog/${i.slug}`].push(local);
      } else {
        posts[`/blog/${i.slug}`] = [];
        posts[`/blog/${i.slug}`].push(local);
      }
    });

    if (blogListData?.data?.hasNextPage) {
      page += 1;
      recFetch(local);
    }
  };

  for (let i = 0; i < locales.length; i++) {
    await recFetch(locales[i]);
  }

  return posts;
}

async function getAllTags() {
  const tags: any = {};
  const tagFetch = async (lang: string) => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${baseURL}/posts/tags?lang=${lang}`, {
      method: 'GET',
    });
    const tagData = await res.json();

    tagData?.data?.forEach((tag: BlogTagItem) => {
      if (tags.hasOwnProperty(`/blog/tag/${tag.value}`)) {
        tags[`/blog/tag/${tag.value}`].push(lang);
      } else {
        tags[`/blog/tag/${tag.value}`] = [];
        tags[`/blog/tag/${tag.value}`].push(lang);
      }
    });
  };

  for (let i = 0; i < locales.length; i++) {
    await tagFetch(locales[i]);
  }

  return tags;
}

function getUrl(pathname: string, locale: string) {
  return `${host}/${locale}${pathname === '/' ? '' : pathname.replaceAll(' ', '%20')}`;
}

function generateSitemapUrl(pathname: string, currentLocale: string) {
  return {
    url: getUrl(pathname, currentLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(locales.map(locale => [locale, getUrl(pathname, locale)])),
    },
  };
}

function generateDynamicSitemapUrl(obj: any) {
  const urls = Object.keys(obj);
  const maps: any[] = [];

  urls.forEach(url => {
    const locales = obj[url];

    const localMaps = locales.map((lang: string) => {
      const sitemap: any = {
        url: getUrl(url, lang),
        lastModified: new Date(),
      };

      if (locales.length > 1) {
        sitemap['alternates'] = {
          languages: Object.fromEntries(locales.map((local: string) => [local, getUrl(url, local)])),
        };
      }

      return sitemap;
    });

    maps.push(...localMaps);
  });

  return maps;
}

async function generateTagSitemapUrl() {
  try {
    const tags = await getAllTags();
    const maps = generateDynamicSitemapUrl(tags);

    return maps;
  } catch (err) {
    console.error('Fetch post error: ', err);
    return [];
  }
}

async function generateBlogSitemapUrl() {
  try {
    const posts = await getAllPosts();
    const maps = generateDynamicSitemapUrl(posts);

    return maps;
  } catch (err) {
    console.error('Fetch post error: ', err);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let _pathnames = [...pathnames, ...productPaths, ...solutionPaths, ...featurePaths, ...baseRoutes];

  const tagMaps = await generateTagSitemapUrl();
  const blogMaps = await generateBlogSitemapUrl();

  const maps = locales.flatMap(locale => _pathnames.map(pathname => generateSitemapUrl(pathname, locale)));

  return maps.concat(tagMaps).concat(blogMaps);
}

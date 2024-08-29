import { MetadataRoute } from 'next';
import { locales, host } from '@/config';

import type { Blog } from '@/types/blog';

interface BlogTagItem {
  label: string;
  value: string;
}

// Adapt this as necessary
const pathnames = ['/', '/scraping', '/pricing', '/book-a-demo'];

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
    const maps = generateDynamicSitemapUrl([]);

    return maps;
  } catch (err) {
    console.error('Fetch post error: ', err);
    return [];
  }
}

async function generateBlogSitemapUrl() {
  try {
    const maps = generateDynamicSitemapUrl([]);

    return maps;
  } catch (err) {
    console.error('Fetch post error: ', err);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let _pathnames = [...pathnames];

  const tagMaps = await generateTagSitemapUrl();
  const blogMaps = await generateBlogSitemapUrl();

  const maps = locales.flatMap(locale => _pathnames.map(pathname => generateSitemapUrl(pathname, locale)));

  return maps.concat(tagMaps).concat(blogMaps);
}

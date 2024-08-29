import { LocalePrefix } from 'next-intl/routing';
export const locales = ['en'];
export const localeMap = [
  { label: 'English', value: 'en', subLabel: 'EN' },
  { label: '简体中文', value: 'zh', subLabel: 'ZH' },
  { label: 'Русский', value: 'ru', subLabel: 'RU' },
  { label: 'Español', value: 'es', subLabel: 'ES' },
  { label: 'Tiếng Việt', value: 'vi', subLabel: 'VI' },
];

export const host = process.env.SITE_URL || 'https://www.nstbrowser.io';
export const appHost = process.env.APP_URL || 'https://app.nstbrowser.io';
export const baseUrl = appHost + '/api/v1';
export const defaultLocale = 'en' as const;

export const localePrefix = 'as-needed' satisfies LocalePrefix;

export const productList = ['fingerprint-browser', 'rpa', 'cloudflare-bypass', 'browserless', 'web-unlocker'] as const;
export const solutionList = [
  'fingerprint-browser',
  'multi-account',
  'scraping',
  'anti-detect-bot',
  'data-isolation',
] as const;

export const dashboardWebsite = 'https://app.nstbrowser.io/' as const;

export const ossDomain = 'https://assets.nstbrowser.io' as const;

export const docsWebsite = 'https://docs.nstbrowser.io/' as const;
export const featureList = [
  'affiliate_marketing',
  'e_commerce',
  'bounty_airdrop',
  'web_scraping',
  'market_research',
  'privacy_anonymity',
  'digital_agencies',
];
export const baseRoutes = [
  '/affiliate-program',
  '/download',
  '/partners',
  '/partners/cooperate-width-us',
  '/pricing',
  '/policy/cookie',
  '/policy/privacy',
  '/policy/terms-conditions',
  '/rpa-marketplace',
  '/release-notes',
];

export const outLinks = {
  x: 'https://api.nstbrowser.io/api/v1/links/twitter',
  tg: 'https://api.nstbrowser.io/api/v1/links/telegram',
  discord: 'https://api.nstbrowser.io/api/v1/links/discord',
  fb: 'https://api.nstbrowser.io/api/v1/links/facebook',
  ins: 'https://api.nstbrowser.io/api/v1/links/linkedin',
} as const;

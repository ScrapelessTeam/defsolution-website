import { LocalePrefix } from 'next-intl/routing';
export const locales = ['en'];
export const localeMap = [
  { label: 'English', value: 'en', subLabel: 'EN' },
];

export const defaultLocale = 'en' as const;

export const localePrefix = 'as-needed' satisfies LocalePrefix;

export const host = 'https://www.defsolution.io';
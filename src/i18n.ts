import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { IntlErrorCode } from 'next-intl';
import { locales } from './config';

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    return notFound();
  }

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      } else {
        // Other errors indicate a bug in the app and should be reported
        console.error('locale error', error);
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter(part => part != null).join('.');

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + ' is not yet translated';
      } else {
        return 'Dear developer, please fix this message: ' + path;
      }
    },
  };
});

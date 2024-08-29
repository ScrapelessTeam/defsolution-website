import en from './src/locales/en.json';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  interface LocaleParams {
    params: { locale: any };
  }
  interface Window {
    tidioChatApi: {
      open: () => void;
    };
  }
}

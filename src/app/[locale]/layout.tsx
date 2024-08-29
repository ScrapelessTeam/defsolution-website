import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextUIProvider } from '@nextui-org/react';
import pick from 'lodash-es/pick';
import Header from './header';
import Footer from './footer';
import CookiePolicyModal from '@/components/cookie-policy-modal';
import '@/styles/global.scss';
import '@/styles/global.css';
import '@/styles/index.scss';

export async function generateMetadata({ params: { locale } }: LocaleParams) {
  const t = await getTranslations({ locale });

  return {
    title: t('Metadata.Index.title'),
    description: t('Metadata.Index.description'),
    keywords: t('Metadata.Index.keywords'),
    other: {
      'google-site-verification': '1zWqACo9i9Otkkvdtku6fhptNl598nx8Ybx1ViU3SM4',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className="bg-[var(--bg-primary)]">
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16607807560" async></Script>
        <Script id="gtag-script">{`window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'AW-16607807560');`}</Script> */}
        {/* <Script src="https://code.tidio.co/zltuqowyx81fwyqvdncorwhcsqjsgqzm.js" async defer /> */}
        {/* <Script src="https://botwafguard.nstbrowser.io/event.js" async></Script> */}
        <NextUIProvider>
          <NextIntlClientProvider
            messages={pick(messages, [
              'Error',
              'Index',
              'header',
              'sign-in',
              'common',
              'form',
              'download',
              'affiliatePrograms',
              'blog',
              'partner',
              'pricing',
              'product',
              'links',
              'contact',
              'contact-us',
              'start-free-trial',
              'multiAccount',
              'all-blog',
              'start',
              'faq',
              'NotFoundPage',
              'view-more',
              'rpa',
              'download-for-free',
            ])}>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookiePolicyModal />
          </NextIntlClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

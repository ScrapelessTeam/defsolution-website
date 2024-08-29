import { getLocale, getTranslations } from 'next-intl/server';
import ProductBanner from '@/components/product/product-banner';
import ProductEntry from '@/components/product/product-entry';
import ProductFaq from '@/components/product/product-faq';
import FooterContact from '@/components/footer-contact';
import StartNow from '@/components/start-now';

import ProductBrowserlessIntroduce from '@/components/product/product-browserless-introduce';
import ProductBrowserlessSense from '@/components/product/product-browserless-sense';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t(`Metadata.product.browserless.title`),
    description: t(`Metadata.product.browserless.description`),
    keywords: t(`Metadata.product.browserless.keywords`),
  };
}

export default async function Page() {
  return (
    <section>
      <ProductBanner />

      <ProductEntry />

      <ProductBrowserlessIntroduce />
      <ProductBrowserlessSense />

      <ProductFaq />

      <FooterContact />
    </section>
  );
}

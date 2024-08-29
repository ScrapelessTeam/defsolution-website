import { useTranslations } from 'next-intl';
import { productList } from '@/config';
import Faq from '@/components/faq';

export default function ProductFaq() {
  const t = useTranslations();

  const faqList = {
    browserless: [
      {
        title: t('fqa.browserless.title1'),
        content: t('fqa.browserless.desc1'),
      },
      {
        title: t('fqa.browserless.title2'),
        content: t('fqa.browserless.desc2'),
      },
      {
        title: t('fqa.browserless.title3'),
        content: t('fqa.browserless.desc3'),
      },
      {
        title: t('fqa.browserless.title4'),
        content: t('fqa.browserless.desc4'),
      },
    ],
  };

  return (
    <div className="ipad:block hidden mx-auto container pt-[120px]">
      <Faq faq={faqList['browserless']} />
    </div>
  );
}

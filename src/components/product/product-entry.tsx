import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import { productList } from '@/config';
import MySvg from '@/components/my-svg';
import ContactUsPrimary from '@/components/contact-us-primary';

interface BoxItem {
  icon: string;
  title: string;
  desc: string;
}

type BoxList = {
  browserless: BoxItem[];
};

export default function ProductEntry() {
  const t = useTranslations();
  const boxDataMap = {
    browserless: [
      {
        icon: '/assets/icons/product/docker.svg',
        title: t('product.entry.browserlessTitle1'),
        desc: t('product.entry.browserlessDesc1'),
      },
      {
        icon: '/assets/icons/product/headless.svg',
        title: t('product.entry.browserlessTitle2'),
        desc: t('product.entry.browserlessDesc2'),
      },
      {
        icon: '/assets/icons/product/power.svg',
        title: t('product.entry.browserlessTitle3'),
        desc: t('product.entry.browserlessDesc3'),
      },
      {
        icon: '/assets/icons/product/execute.svg',
        title: t('product.entry.browserlessTitle4'),
        desc: t('product.entry.browserlessDesc4'),
      },
    ],
  };

  const smallBoxDataMap: BoxList = {
    browserless: [],
  };

  function getBoxes() {
    return boxDataMap['browserless'];
  }

  function getSmallBoxes() {
    return smallBoxDataMap['browserless'];
  }

  const box = getBoxes();

  const smallBox = getSmallBoxes();

  return (
    <div className="mx-auto container ipad:py-[120px] iph:py-[60px] py-[40px]">
      {box.length > 0 && (
        <div className="ipad:mb-8 iph:mb-4 mb-3 flex flex-wrap justify-center ipad:gap-8 iph:gap-4 gap-3">
          {box.map((b, i) => {
            return (
              <div
                key={i}
                className="iph:min-h-[252px] iph:w-[576px] w-[350px] ipad:py-8 iph:py-4 py-[10px] ipad:px-10 iph:px-5 px-[14px] rounded-[8px] cursor-pointer hover:shadow-box border border-solid border-[var(--border-color)] hover:border-transparent hover:-translate-y-4 transition-all">
                <MySvg src={b.icon} />
                <p className="ipad:mt-4 iph:mt-2 mt-[6px] text-title-primary-weight ipad:text-lg iph:text-base text-sm">
                  {b.title}
                </p>
                <p className="mt-[6px] text-sm text-[var(--text-color-4)]">{b.desc}</p>
              </div>
            );
          })}
        </div>
      )}

      {smallBox.length > 0 && (
        <div className="ipad:mb-8 iph:mb-4 mb-3 flex flex-wrap justify-center ipad:gap-8 iph:gap-4 gap-3">
          {smallBox.map((b, i) => {
            return (
              <div
                key={i}
                className="ipad:w-[373px] iph:w-[576px] w-[350px] ipad:py-8 iph:py-4 py-[10px] ipad:px-10 iph:px-5 px-[14px] rounded-[8px] cursor-pointer hover:shadow-box border border-solid border-[var(--border-color)] hover:border-transparent hover:-translate-y-4 transition-all">
                <MySvg src={b.icon} />
                <p className="ipad:mt-4 iph:mt-2 mt-[6px] text-title-primary-weight ipad:text-lg iph:text-base text-sm">
                  {b.title}
                </p>
                <p className="mt-[6px] text-sm text-[var(--text-color-4)]">{b.desc}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-center flex-wrap ipad:gap-6 iph:gap-3 gap-2">
        <Link href="/pricing">
          <Button
            className="min-w-[150px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
            color="primary">
            Pricing
          </Button>
        </Link>
      </div>
    </div>
  );
}

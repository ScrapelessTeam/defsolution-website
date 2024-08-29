import { useTranslations } from 'next-intl';
import { combineClasses } from '@/lib/utils';
import MySvg from '@/components/my-svg';
import ContactForm from '@/components/contact-form';
import '@/styles/common.scss';

interface FooterContactProps {
  title?: boolean;
  className?: string
}

export default function FooterContact({ title = true, className }: FooterContactProps) {
  const t = useTranslations();
  return (
    <div className={combineClasses("ipad:py-[120px] iph:py-[60px] py-[40px] relative", className)}>
      <div className="iph:w-[500px] w-[300px] iph:h-[500px] h-[300px] iph:rounded-[500px] rounded-[300px] purple-bg absolute ipad:top-[476px] iph:top-[34px] ipad:left-[519px] iph:left-[260px]"></div>
      <div className="iph:w-[577px] w-[311px] iph:h-[577px] h-[311px] iph:rounded-[577px] rounded-[311px] yellow-bg absolute -top-[30px] iph:right-[80px] right-0"></div>
      <div className="mx-auto container relative">
        {title && (
          <div className="ipad:mb-[48px] iph:mb-[24px] mb-[16px]">
            <h2 className="mx-auto text-center text-h2 ipad:text-[32px] iph:text-[24px] text-xl">
              {t('contact.title')}
            </h2>
          </div>
        )}

        <div className="flex justify-between">
          <div className="ipad:block hidden w-[488px]">
            <p className="text-[var(--text-color-1)] text-[28px] font-semibold mt-2">{t('contact.subTitle')}</p>

            <ul className="pl-[28px] mt-[48px]">
              <li className="list-disc">
                <span className="text-[var(--text-color-4)] text-lg">{t('contact.desc')}</span>
              </li>
              <li className="list-disc my-8">
                <span className="text-[var(--text-color-4)] text-lg">{t('contact.desc2')}</span>
              </li>
              <li className="list-disc">
                <span className="text-[var(--text-color-4)] text-lg">{t('contact.desc3')}</span>
              </li>
            </ul>
          </div>
          <ContactForm className="ipad:w-[609px] w-full" />
        </div>
      </div>
    </div>
  );
}

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SolutionBrowserIntroduce() {
  const t = useTranslations();
  return (
    <div className="bg-[var(--bg-primary)] pb-[30px]">
      <div className="mx-auto container">
        <h2 className="text-h2 ipad:text-[32px] iph:text-[24px] text-xl text-center mx-auto">
          {t('solution.browser.title')}
        </h2>
        <p className="text-sub-title-desc ipad:text-lg iph:text-base text-sm mt-3 text-center">
          {t('solution.browser.desc')}
        </p>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('solution.browser.title1')}{' '}
              <span className="text-[var(--primary-color)]">{t('solution.browser.title1-1')}</span>
            </h3>

            {/* <p className="font-medium iph:text-lg text-base text-[var(--text-color-4)]">
              {t('solution.browser.desc1')}
            </p> */}
            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('Index.introduce.desc2-2')}
              <span className="font-medium text-[var(--text-color-4)]">{t('Index.introduce.desc2-1')}&nbsp;</span>
              {t('Index.introduce.desc2')}
            </p>
          </div>

          <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
            <Image src="/assets/images/solution/browser-1.png" alt="" fill />
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
          <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
            <Image src="/assets/images/solution/browser-2.png" alt="" fill />
          </div>
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('solution.browser.title2')}
              <span className="text-[var(--text-color-5)]">{t('solution.browser.title2-1')}</span>
            </h3>

            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('Index.introduce.desc3')}
              <span className="font-medium text-[var(--text-color-4)]">{t('Index.introduce.desc3-1')}</span>
            </p>
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('solution.browser.title3')}
            </h3>

            {/* <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('solution.browser.desc4')}
            </p> */}
            <ul>
              <li>
                <p className="font-medium iph:text-lg text-base text-[var(--text-color-4)]">
                  {t('Index.introduce.desc5')}
                  <span className="font-normal text-[var(--text-color-3)]">{t('Index.introduce.desc5-2')}</span>
                </p>
              </li>
              <br />
              <li>
                <p className="font-medium iph:text-lg text-base text-[var(--text-color-4)]">
                  {t('Index.introduce.desc5-3')}
                  <span className="font-normal text-[var(--text-color-3)]">{t('Index.introduce.desc5-4')}</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
            <Image src="/assets/images/solution/browser-3.png" alt="" fill />
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
          <div className="iph:w-[608px] iph:h-[340px] w-[364px] h-[204px] relative">
            <Image src="/assets/images/solution/browser-4.png" alt="" fill />
          </div>

          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              <span className="text-[var(--text-color-1)]">{t('solution.browser.title4')} </span>
              {t('solution.browser.title5-1')}
            </h3>

            {/* <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              <span className="font-medium text-[var(--text-color-4)]">{t('solution.browser.desc7')}&nbsp;</span>
              {t('solution.browser.desc7-2')}
              <span className="font-medium text-[var(--text-color-4)]">
                &nbsp;{t('solution.browser.desc7-1')}&nbsp;
              </span>
              {t('solution.browser.desc7-3')}
            </p> */}
            <ul>
              <li>
                <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
                  {t('Index.introduce.desc6-4')}
                  {/* <span className="font-normal text-[var(--text-color-3)]">{t('Index.introduce.desc6-5')}</span> */}
                </p>
              </li>
              <br />
              <li>
                <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
                  {t('Index.introduce.desc6-6')}
                  {/* <span className="font-normal text-[var(--text-color-3)]">{t('Index.introduce.desc6-7')}</span> */}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

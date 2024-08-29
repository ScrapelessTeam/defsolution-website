import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';

export default function HomeIntroduce() {
  const t = useTranslations();

  return (
    <div className="ipad:py-[120px] iph:py-[60px] py-[40px] bg-white">
      <div className="mx-auto container">
        <h2 className="mx-auto text-h2 ipad:text-[32px] iph:text-[24px] text-xl text-center ipad:w-[1007px] iph:w-[740px]">
          {t('Index.introduce.title')}
        </h2>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3">
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('Index.introduce.title1')}{' '}
              <span className="text-[var(--primary-color)]">{t('Index.introduce.title1-2')}</span>
            </h3>

            {/* <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">{t('Index.introduce.desc1')}</p> */}
            <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              {t('Index.introduce.desc2-2')}
              <span className="font-medium text-[var(--text-color-4)]">{t('Index.introduce.desc2-1')}&nbsp;</span>
              {t('Index.introduce.desc2')}
            </p>
          </div>

          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image
              src="/assets/images/home/scraping.png"
              sizes="(max-width: 740px) 100vw, (max-width: 100px) 50vw, 33vw"
              quality={100}
              alt=""
              fill
            />
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image
              src="/assets/images/home/captcha.png"
              quality={100}
              alt=""
              fill
              sizes="(max-width: 740px) 100vw, (max-width: 100px) 50vw, 33vw"
            />
          </div>
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('Index.introduce.title2')}{' '}
              <span className="text-[var(--text-color-5)]">{t('Index.introduce.title2-2')}</span>
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
              {t('Index.introduce.title3')}
            </h3>

            {/* <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">{t('Index.introduce.desc4')}</p> */}

            <br />
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

          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image
              src="/assets/images/home/automation.png"
              quality={100}
              alt=""
              fill
              sizes="(max-width: 740px) 100vw, (max-width: 100px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="ipad:py-[90px] iph:py-[45px] py-[30px] flex ipad:justify-between justify-center flex-wrap gap-3 ipad:flex-row flex-col-reverse ipad:items-start items-center">
          <div className="iph:w-[608px] iph:h-[340px] w-[351px] h-[204px] relative">
            <Image
              src="/assets/images/home/compatibility.png"
              quality={100}
              alt=""
              fill
              sizes="(max-width: 740px) 100vw, (max-width: 100px) 50vw, 33vw"
            />
          </div>
          <div className="ipad:w-[448px] iph:w-[608px] w-[360px] flex flex-col justify-center">
            <h3 className="text-h3 ipad:text-[32px] iph:text-[24px] text-[20px] ipad:mb-4 iph:mb-2 mb-1">
              {t('Index.introduce.title4')}{' '}
              <span className="text-[var(--text-color-5)]">{t('Index.introduce.title4-2')}</span>
            </h3>

            {/* <p className="font-normal iph:text-lg text-base text-[var(--text-color-3)]">
              <span className="font-medium text-[var(--text-color-4)]">{t('Index.introduce.desc6')}&nbsp;</span>
              {t('Index.introduce.desc6-2')}
              <span className="font-medium text-[var(--text-color-4)]">&nbsp;{t('Index.introduce.desc6-1')}&nbsp;</span>
              {t('Index.introduce.desc6-3')}
            </p> */}

            {/* <br /> */}
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

        <div className="text-center">
          <Link href="/solution/fingerprint-browser">
            <Button
              className="min-w-[94px] h-[46px] px-2 iph:text-lg text-base bg-[var(--primary-color)] text-white"
              color="primary">
              {t('more')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

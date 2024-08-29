'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import lottie from 'lottie-web/build/player/lottie_light';
import '@/styles/animate.scss';
import * as animationData from './line2.json';

import type { AnimationItem } from 'lottie-web';

export default function HomeBanner() {
  const t = useTranslations();
  const lineRef = useRef<null | HTMLDivElement>(null);
  const lineSvg = useRef<null | AnimationItem>(null);

  useEffect(() => {
    if (!lineSvg?.current) {
      lineSvg.current = lottie.loadAnimation({
        container: lineRef.current as Element,
        animationData: animationData,
        loop: true,
        autoplay: true,
        renderer: 'svg',
      });
    }
  }, []);

  return (
    <div className="ipad:pt-[109px] pt-[57px] bg-[var(--bg-color)] relative">
      <div ref={lineRef} className="absolute w-full h-[1300px] -top-[70px] left-[50%] -translate-x-[50%]"></div>
      <div className="mx-auto container ipad:pt-20 iph:pt-10 pt-[28px] flex flex-wrap items-center justify-center relative ipad:min-h-[312px] iph:min-h-[278px] min-h-[269px]">
        <h1 className="text-h1 w-[1001px] text-center ipad:text-[40px] iph:text-[32px] text-[24px]">
          <span className="text-[#FA8525]">{t('Index.title1')}</span> {t('Index.title')}
        </h1>

        <p className="text-title-desc w-[729px] text-center mt-4 ipad:text-[20px] iph:text-[16px] text-[15px]">
          {t('Index.desc')}
        </p>

        <div className="absolute ipad:w-[980px] ipad:h-[198px] iph:w-[700px] iph:h-[141px] w-[350px] h-[71px] top-[360px] z-50 floating-element">
          <Image src="/assets/images/home/banner-up.png" quality={100} alt="" fill priority />
        </div>
        <div className="absolute ipad:w-[908px] ipad:h-[234px] iph:w-[648px] iph:h-[167px] w-[324px] h-[84px] ipad:top-[451px] iph:top-[422px] top-[388px] z-40">
          <Image src="/assets/images/home/banner-down.png" priority quality={100} alt="" fill />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1920px] ipad:h-[419px] l:h-[481px] iph:h-[400px] h-[230px] mt-[16px]">
        <Image src="/assets/images/home/net-up.png" priority quality={100} alt="" fill />
      </div>
    </div>
  );
}

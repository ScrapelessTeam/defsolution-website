'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

let observer: IntersectionObserver;

export default function ApRealTime() {
  const [registrantNum, setRegistrantNum] = useState<number>(0);
  const [awardAmount, setAwardAmount] = useState<number>(0);
  const t = useTranslations();

  function handleNumAnimation() {
    const realTimeEl = document.getElementById('realTime');
    const counterElement = document.getElementById('registrantNum');
    const awardElement = document.getElementById('awardNum');

    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 使用 GSAP Tween 来创建数字动画
            gsap.to(counterElement, {
              duration: 1, // 动画持续时间（秒）
              innerHTML: 34, // 动画结束时的值
              roundProps: 'innerHTML', // 四舍五入innerHTML属性
              ease: 'power1.out', // 缓动函数
            });

            gsap.to(awardElement, {
              duration: 1,
              innerHTML: 80,
              roundProps: 'innerHTML', // 四舍五入innerHTML属性
              ease: 'power1.out',
            });
          }
        });
      },
      {
        threshold: 0.5,
      },
    );
    observer.observe(realTimeEl!);
  }

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    handleNumAnimation();
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative max-w-[608px] overflow-hidden">
      <div id="registrantNum" className="m:top-[152px] top-[120px] absolute left-[97px] text-5xl font-semibold">
        {registrantNum}
      </div>
      <div className="award-text text-primary m:top-[152px] top-[120px] absolute ml:right-[35%] m:right-[42%] right-[30%] text-5xl font-semibold">
        <span>$</span>
        <span id="awardNum" className="inline-block w-[67px]">
          {awardAmount}
        </span>
      </div>
      <Image
        src="/assets/images/affiliate-programs/real-time.png"
        width={608}
        height={322}
        quality={100}
        alt={t('affiliatePrograms.realTimeRewardsDesc')}
      />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';

export default function CookiePolicyModal() {
  const t = useTranslations();

  const [show, setShow] = useState(false);

  useEffect(() => {
    const agree = localStorage.getItem('cookie_consent');
    if (!agree) {
      setShow(true);
      return;
    }

    if (agree === 'yes') return;

    const oneDay = 1000 * 60 * 60 * 24;
    const now = Date.now();
    if (now > Number(agree) + oneDay) {
      setShow(true);
    }
  }, []);

  function onAccept() {
    localStorage.setItem('cookie_consent', 'yes');
    setShow(false);
  }

  function onReject() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }

    localStorage.setItem('cookie_consent', String(Date.now()));
    setShow(false);
  }

  function onClose() {
    setShow(false);
  }

  return (
    <>
      {show && (
        <div className="fixed bottom-4 left-[50%] -translate-x-[50%] ipad:p-12 iph:p-6 p-4 ipad:w-[811px] iph:w-[730px] w-[350px] bg-white z-[9999] border border-solid border-[#B0BBFC] shadow-cookie rounded-2xl">
          <div className="ipad:flex hidden justify-between gap-[45px]">
            <div>
              <p className="text-[var(--text-color-1)] font-semibold text-xl">{t('contact.cookieTitle')}</p>
              <p className="mt-4 text-[var(--text-color-4)] text-base font-normal">
                {t('contact.cookieDesc')}
                <Link href="/policy/cookie" className="text-[var(--primary-color)]" onClick={onClose}>
                  {t('contact.cookieView')}
                </Link>
              </p>
            </div>

            <div>
              <Button
                className="min-w-[180px] h-[46px] px-2 text-lg bg-[var(--primary-color)] text-white"
                onPress={onAccept}>
                {t('contact.accept-cookie')}
              </Button>
              <Button
                className="min-w-[180px] h-[46px] px-2 text-lg mt-4 border hover:bg-[var(--primary-color)] hover:text-white"
                color="primary"
                variant="ghost"
                onPress={onReject}>
                {t('contact.reject')}
              </Button>
            </div>
          </div>

          <div className="ipad:hidden block">
            <div>
              <p className="text-[var(--text-color-1)] font-semibold iph:text-base text-[15px]">
                {t('contact.cookieTitle')}
              </p>
              <p className="mt-4 text-[var(--text-color-4)] text-sm font-normal">
                {t('contact.cookieDesc')}
                <Link href="/policy/cookie" className="text-[var(--primary-color)]" onClick={onClose}>
                  {t('contact.cookieView')}
                </Link>
              </p>
            </div>
            <div className="iph:flex hidden items-center justify-between iph:w-[400px] mx-auto mt-2">
              <Button
                className="min-w-[180px] h-[46px] px-2 iph:text-base text-[15px] border hover:bg-[var(--primary-color)] hover:text-white"
                color="primary"
                variant="ghost"
                onPress={onReject}>
                {t('contact.reject')}
              </Button>
              <Button
                className="min-w-[180px] h-[46px] px-2 iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
                onPress={onAccept}>
                {t('contact.accept-cookie')}
              </Button>
            </div>
            <div className="iph:hidden flex flex-col items-center justify-center w-[340px] mt-2 gap-2">
              <Button
                className="min-w-[180px] h-[46px] px-2 iph:text-base text-[15px] border hover:bg-[var(--primary-color)] hover:text-white"
                color="primary"
                variant="ghost"
                onPress={onReject}>
                {t('contact.reject')}
              </Button>
              <Button
                className="min-w-[180px] h-[46px] px-2 iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
                onPress={onAccept}>
                {t('contact.accept-cookie')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

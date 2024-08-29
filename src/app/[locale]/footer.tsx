'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { docsWebsite } from '@/config';
import { combineClasses } from '@/lib/utils';
import { Link, usePathname } from '@/navigation';
import Logo from '@/components/logo';
import MySvg from '@/components/my-svg';
import NavMenuPhone from '@/components/header/nav-menu-phone';

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  const links = [
    { label: t('links.browserless'), href: '/' },
    { label: t('links.web-scraping-and-automation'), href: '/scraping' },
    { label: t('links.pricing'), href: '/pricing' },
  ];

  const legalLinks = [
    { label: t('links.terms'), href: '/policy/terms-conditions' },
    { label: t('links.privacy-policy'), href: '/policy/privacy' },
    { label: t('links.cookies-policy'), href: '/policy/cookie' },
  ];

  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [showPhoneMenuKey, setShowPhoneMenuKey] = useState('');

  useEffect(() => {
    if (showPhoneMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPhoneMenu]);

  useEffect(() => {
    if (!showPhoneMenuKey) return;
    setShowPhoneMenu(true);
  }, [showPhoneMenuKey]);

  function onFooterMenuClick(type: string) {
    setShowPhoneMenuKey(type);
  }

  return (
    <footer className={combineClasses("relative z-[1000]", pathname === '/book-a-demo' ? '' : 'bg-[--bg-primary]')}>
      <div className="ipad:flex hidden justify-between container py-20 gap-6">
        <div className="w-[216px] flex items-center">
          <Logo />
        </div>
        {/* <div>
          {links.map((l, i) => {
            return (
              <div key={i} className="mt-5 max-w-[228px] min-w-[140px]">
                <Link className="text-base text-[var(--text-color-3)] font-normal" href={l.href}>
                  {l.label}
                </Link>
              </div>
            );
          })}
        </div> */}

        <div className='flex items-center gap-12'>
          {legalLinks.map((l, i) => {
            return (
              <div key={i}>
                <Link className="text-base text-[var(--text-color-3)] font-normal" href={l.href}>
                  {l.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex items-center">
            <p className="text-[var(--text-color-3)] font-normal text-sm w-full">
            © 2024 DEFSOLUTION LLC. ALL RIGHTS RESERVED.
            </p>
          </div>
      </div>

      <div className="ipad:hidden block">
        <Logo className="justify-center pt-10 pb-6 mr-0" />

        <div className="flex flex-col items-center justify-center pt-6 pb-10">
          <p className="my-[20px] text-[var(--text-color-3)] font-normal text-sm iph:w-full w-[296px] text-center">
            © 2024 Defsolution TECH LTD. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {showPhoneMenu && (
        <NavMenuPhone
          defaultOpen={showPhoneMenuKey}
          onClick={() => {
            setShowPhoneMenu(false);
          }}
        />
      )}
    </footer>
  );
}

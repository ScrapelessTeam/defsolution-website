'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/button';
import { combineClasses } from '@/lib/utils';
import { dashboardWebsite } from '@/config';
import { Link } from '@/navigation';
import Logo from '@/components/logo';
import NavMenu from '@/components/header/nav-menu';
import LangSwitch from '@/components/lang-switch';
import NavMenuPhone from '@/components/header/nav-menu-phone';
import MySvg from '@/components/my-svg';
import '@/styles/header.scss';

export default function Header() {
  const t = useTranslations();
  const [classNames, setClassNames] = useState('');
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

  useEffect(() => {
    const checkHeaderClass = () => {
      if (window.scrollY > 57) {
        setClassNames('header-on-scroll');
      } else {
        setClassNames('');
      }
    };
    checkHeaderClass();

    const handleScroll = () => {
      checkHeaderClass();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showPhoneMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPhoneMenu]);

  return (
    <header
      className={combineClasses(
        'flex items-center w-full h-[57px] bg-inherit fixed top-0 left-0 box-content z-[999]',
        classNames,
      )}>
      <div className="hidden ipad:flex justify-between items-center container mx-auto bg-inherit">
        <div className="flex justify-between items-center">
          <Logo className="pb-[3px]" />

          <NavMenu />
        </div>

        <div className="flex items-center">
          <Link href='/book-a-demo'>
            <div
              className="px-2 py-[6px] text-sm font-medium text-[var(--text-color-1)] cursor-pointer">
              Book a Demo
            </div>
          </Link>
        </div>
      </div>

      <div className="flex ipad:hidden justify-between items-center container mx-auto bg-inherit">
        <Logo />

        <div
          onClick={() => {
            setShowPhoneMenu(!showPhoneMenu);
          }}>
          <MySvg src={`/assets/icons/header/${showPhoneMenu ? 'close' : 'menu'}.svg`} />
        </div>
      </div>

      {showPhoneMenu && (
        <NavMenuPhone
          onClick={() => {
            setShowPhoneMenu(false);
          }}
        />
      )}
    </header>
  );
}

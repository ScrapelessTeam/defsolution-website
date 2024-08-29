'use client';

/**
 * 移动端的menu组件，nextui和shadcn的drawer太傻逼
 * 以后还是要用大而全的组件库，改样式比手写强
 */
import { useTranslations } from 'next-intl';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { docsWebsite, dashboardWebsite } from '@/config';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import MySvg from '@/components/my-svg';
import LangSwitch from '@/components/lang-switch';
import QaIconClose from '@/components/qa-icon-close';
import QaIconOpen from '@/components/qa-icon-open';
import Logo from '@/components/logo';

import type { NavMenuItemProps } from './nav-item';

interface NavMenuPhoneProps {
  onClick?: () => void;
  defaultOpen?: string;
}

export default function NavMenuPhone({ onClick, defaultOpen }: NavMenuPhoneProps) {
  const t = useTranslations();

  const productData: NavMenuItemProps[] = [
    {
      icon: '/assets/icons/header/bag-sm.svg',
      title: t('links.browserless'),
      desc: t('links.desc.browserless'),
      src: '/product/browserless',
    }
  ];

  const solutionData: NavMenuItemProps[] = [
    {
      icon: '/assets/icons/header/scraping-sm.svg',
      title: t('links.web-scraping-and-automation'),
      desc: t('links.desc.scrap'),
      src: '/solution/scraping',
    }
  ];

  const legalData = [
    { label: t('links.terms'), href: '/policy/terms-conditions' },
    { label: t('links.privacy-policy'), href: '/policy/privacy' },
    { label: t('links.cookies-policy'), href: '/policy/cookie' },
  ];

  function getPricingPath() {
    return `/pricing`;
  }
  function getBrowserlessPath() {
    return `/pricing`;
  }

  function onLinkPress() {
    onClick && onClick();
  }

  return (
    <div
      className="fixed left-0 top-0 w-full bg-white z-[9999]"
      style={{
        height: 'calc(100vh)',
      }}>
      <div className="w-full flex justify-between items-center h-[57px] shadow-head px-[24px]">
        <Logo />

        <div onClick={onLinkPress}>
          <MySvg src={`/assets/icons/header/close.svg`} />
        </div>
      </div>

      <ScrollArea
        className="pb-4"
        style={{
          height: 'calc(100vh - 57px)',
        }}>
        <div className="pl-6 leading-[48px]">
          <Link
            className="font-medium text-base text-[var(--text-color-1)]"
            href="/policy/terms-conditions"
            onClick={onLinkPress}>
            {t('links.terms')}
          </Link>
        </div>
        <div className="pl-6 leading-[48px]">
          <Link
            className="font-medium text-base text-[var(--text-color-1)]"
            href='/policy/privacy'
            onClick={onLinkPress}>
            {t('links.privacy-policy')}
          </Link>
        </div>
        <div className="pl-6 leading-[48px]">
          <Link
            className="font-medium text-base text-[var(--text-color-1)]"
            href='/policy/cookie'
            onClick={onLinkPress}>
            {t('links.cookies-policy')}
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
}

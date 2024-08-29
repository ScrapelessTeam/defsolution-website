'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function NavMenu() {
  const t = useTranslations('Index');
  const locale = useLocale();

  const [left, setLeft] = useState('left-0');

  function getPricingPath() {
    return `/${locale}/pricing`;
  }
  
  function getScrapingPath() {
    return `/${locale}/scraping`;
  }

  function onMouseEnter(type: string) {
    if (type === 'product') {
      setLeft('left-0');
    }
    if (type === 'solution') {
      setLeft('left-[100px]');
    }
    if (type === 'resource') {
      setLeft('left-[200px]');
    }
  }

  return (
    <>
      <NavigationMenu>
        <NavigationMenuViewport className={left} />
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className="font-normal" href="/">
              Browserless
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="font-normal" href={getScrapingPath()}>
              Scraping
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="font-normal" href={getPricingPath()}>
              {t('nav.pricing')}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

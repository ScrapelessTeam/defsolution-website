import { useTranslations } from 'next-intl';
import NavItem from './nav-item';

import type { NavMenuItemProps } from './nav-item';

export default function NavMenuProduct() {
  const t = useTranslations();

  const productData: NavMenuItemProps[] = [
    {
      icon: '/assets/icons/header/finger.svg',
      title: t('links.anti-fingerprint-browser'),
      desc: t('links.desc.browser'),
      src: '/product/fingerprint-browser',
    },
    {
      icon: '/assets/icons/header/bag.svg',
      title: t('links.browserless'),
      desc: t('links.desc.browserless'),
      src: '/product/browserless',
    },
    {
      icon: '/assets/icons/header/bypass.svg',
      title: t('links.cloudflare-bypass'),
      desc: t('links.desc.bypass'),
      src: '/product/cloudflare-bypass',
    },
    {
      icon: '/assets/icons/header/webUnlocker.svg',
      title: t('links.web-unlocker'),
      desc: t('links.desc.unlocker'),
      src: '/product/web-unlocker',
    },
    {
      icon: '/assets/icons/header/rpa.svg',
      title: 'Nstbrowser RPA',
      desc: t('links.desc.rpa'),
      src: '/product/rpa',
    },
  ];

  return (
    <div className="p-2 flex flex-wrap gap-2 w-[760px]">
      {productData.map(p => {
        return <NavItem className="w-[49%]" src={p.src} key={p.icon} icon={p.icon} title={p.title} desc={p.desc} />;
      })}
    </div>
  );
}

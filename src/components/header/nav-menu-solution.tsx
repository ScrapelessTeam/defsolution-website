import { useTranslations } from 'next-intl';
import NavItem from './nav-item';

import type { NavMenuItemProps } from './nav-item';

export default function NavMenuSolution() {
  const t = useTranslations();
  const productData: NavMenuItemProps[] = [
    {
      icon: '/assets/icons/header/cloud.svg',
      title: t('links.cloud-based-anti-fingerprint-browser'),
      desc: t('links.desc.browser-solution'),
      src: '/solution/fingerprint-browser',
    },
    {
      icon: '/assets/icons/header/account.svg',
      title: t('links.multi-account-management'),
      desc: t('links.desc.multi'),
      src: '/solution/multi-account',
    },
    {
      icon: '/assets/icons/header/scraping.svg',
      title: t('links.web-scraping-and-automation'),
      desc: t('links.desc.scrap'),
      src: '/solution/scraping',
    },
    {
      icon: '/assets/icons/header/detection.svg',
      title: t('links.anti-bot-detection'),
      desc: t('links.desc.detection'),
      src: '/solution/anti-detect-bot',
    },
    {
      icon: '/assets/icons/header/isolation.svg',
      title: t('links.isolation'),
      desc: t('links.desc.isolation'),
      src: '/solution/data-isolation',
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

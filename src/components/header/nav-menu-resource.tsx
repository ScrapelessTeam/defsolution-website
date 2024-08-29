import { useTranslations } from 'next-intl';
import NavItem from './nav-item';

import type { NavMenuItemProps } from './nav-item';

export default function NavMenuResource() {
  const t = useTranslations();
  const productData: NavMenuItemProps[] = [
    {
      icon: '/assets/icons/download.svg',
      title: t('links.download'),
      src: '/download',
    },
    {
      icon: '/assets/icons/header/rpa.svg',
      title: t('links.rpa-marketplace'),
      src: '/rpa-marketplace',
    },
    {
      icon: '/assets/icons/header/affiliate.svg',
      title: t('links.affiliate-program'),
      src: '/affiliate-program',
    },
    {
      icon: '/assets/icons/partner.svg',
      title: t('links.partners'),
      src: '/partners',
    },
    {
      icon: '/assets/icons/blog.svg',
      title: t('links.blogs'),
      src: '/blog/tag/All',
    },
  ];

  return (
    <div className="p-2 flex flex-wrap gap-2 w-[248px]">
      {productData.map(p => {
        return (
          <NavItem
            className="w-full"
            contentClassName="items-center"
            titleClassName="pt-[2px]"
            single
            src={p.src}
            key={p.icon}
            icon={p.icon}
            title={p.title}
          />
        );
      })}
    </div>
  );
}

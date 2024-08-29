'use client';

import * as React from 'react';
import { useLocale } from 'next-intl';
import { localeMap } from '@/config';
import { usePathname, useRouter } from '@/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import MySvg from './my-svg';

function getCurrentLocaleText(locale: string) {
  return localeMap.find(l => l.value === locale)?.subLabel;
}

export default function LangSwitch() {
  const locale = useLocale();
  const [lang, setLang] = React.useState<string>(locale);
  const pathname = usePathname();
  const router = useRouter();
  function onSelectChange(value: string) {
    setLang(value);
    router.replace(pathname, { locale: value });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer">
          <MySvg src="/assets/icons/lang.svg"></MySvg>
          <span className="pl-[2px] text-[var(--text-color-1)] text-sm">{getCurrentLocaleText(lang)}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        {localeMap.map(locale => (
          <DropdownMenuItem
            className="cursor-pointer"
            key={locale.value}
            onSelect={() => {
              onSelectChange(locale.value);
            }}>
            <div className="flex gap-2">
              <MySvg src={`/assets/icons/country/${locale.value}.svg`}></MySvg>
              <span className="text-[var(--text-color-1)] text-base">{locale.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

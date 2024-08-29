'use client';

import { GoDeviceDesktop } from 'react-icons/go';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { combineClasses } from '@/lib/utils';

interface ThemeItem {
  theme: string;
  icon: JSX.Element;
}

export default function ThemeSwitch() {
  const themeList: ThemeItem[] = [
    {
      theme: 'light',
      icon: <FiSun className="w-4 h-4" />,
    },
    {
      theme: 'system',
      icon: <GoDeviceDesktop className="w-4 h-4" />,
    },
    {
      theme: 'dark',
      icon: <FiMoon className="w-4 h-4" />,
    },
  ];

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        quality={100}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  return (
    <div className="flex items-center p-1 w-fit rounded-full bg-[--bg-2] line overflow-hidden ">
      {themeList.map((item, index) => (
        <button
          key={index}
          onClick={() => setTheme(item.theme)}
          className={combineClasses(
            'w-8 h-8 flex justify-center items-center p-[6px] ',
            item.theme === theme && 'bg-white dark:bg-[#1A1A1A] rounded-full',
          )}>
          {item.icon}
        </button>
      ))}
    </div>
  );
}

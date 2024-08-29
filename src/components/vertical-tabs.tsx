'use client';

import { useState } from 'react';
import { combineClasses } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import MySvg from './my-svg';

export interface VerticalTabItem {
  icon: string;
  title: string;
  key: string | number;
}

export interface VerticalTabsProps {
  tabs: VerticalTabItem[];
  onSelect?: (key: VerticalTabItem['key']) => void;
  default?: VerticalTabItem['key'];
  className?: string;
}

export default function VerticalTabs(props: VerticalTabsProps) {
  const [selected, setSelected] = useState<VerticalTabItem['key']>(props.default || '');

  function onClick(key: VerticalTabItem['key']) {
    props.onSelect && props.onSelect(key);
    setSelected(key);
  }

  function getStyles(key: VerticalTabItem['key']): React.CSSProperties {
    return {
      background: key === selected ? '#F9F9FB' : '',
    };
  }

  return (
    <div>
      <div className={combineClasses('w-[434px] ipad:block hidden', props.className)}>
        {props.tabs.map(t => {
          return (
            <div
              key={t.key}
              className="py-6 pl-6 pr-10 flex items-center gap-4 hover:bg-[#F9F9FB] cursor-pointer rounded-lg"
              style={getStyles(t.key)}
              onClick={() => {
                onClick(t.key);
              }}>
              <div className="p-2 rounded-xl border border-solid border-[var(--border-color)]">
                <MySvg src={t.icon} />
              </div>

              <span className="text-base font-medium text-[var(--text-color-1)]">{t.title}</span>
            </div>
          );
        })}
      </div>

      <div className="ipad:hidden block">
        <ScrollArea className="iph:w-[700px] w-[340px] whitespace-nowrap">
          <div className="flex">
            {props.tabs.map(t => {
              return (
                <div
                  key={t.key}
                  className="py-6 pl-6 pr-10 flex items-center gap-4 hover:bg-[#F9F9FB] cursor-pointer rounded-lg"
                  style={getStyles(t.key)}
                  onClick={() => {
                    onClick(t.key);
                  }}>
                  <div className="p-2 rounded-xl border border-solid border-[var(--border-color)]">
                    <MySvg src={t.icon} />
                  </div>

                  <span className="text-base font-medium text-[var(--text-color-1)]">{t.title}</span>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

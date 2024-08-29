'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { combineClasses } from '@/lib/utils';
import styles from './style.module.css';

interface CollaspedProps {
  title: React.ReactNode;
  content: React.ReactNode;
  active?: boolean;
  className?: string;
  isWhiteArrow?: boolean;
}
export default function MyCollapsed({
  content,
  title,
  className,
  active = false,
  isWhiteArrow = false,
}: CollaspedProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (active) {
      setIsActive(true);
    }
  }, [active]);

  useEffect(() => {
    if (isActive) {
      contentRef.current && setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isActive]);
  return (
    <div
      className={combineClasses(
        'flex space-x-6 rounded-xl text-white cursor-pointer transition-all duration-300 ease-in-out',
        styles['my-collapsed'],
        isActive && styles['active'],
        className,
      )}
      onClick={() => setIsActive(!isActive)}>
      <Image
        className={combineClasses('w-6 h-6 transition-all duration-300 ease-in-out', styles['arrow-icon'])}
        src={isWhiteArrow ? '/assets/icons/arrow-bottom-w.svg' : '/assets/icons/arrow-bottom-b.svg'}
        width={24}
        height={24}
        quality={100}
        alt="Arrow"
      />
      <div className="flex flex-col">
        <div className="title items-center">
          <div className="title">{title}</div>
        </div>
        <div
          ref={contentRef}
          className="content overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            height: contentHeight + 'px',
          }}>
          <div className="content mt-4">{content}</div>
        </div>
      </div>
    </div>
  );
}

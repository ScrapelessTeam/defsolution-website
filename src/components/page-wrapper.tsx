import { combineClasses } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  bottomLine?: boolean;
  innerClassName?: string; // 新增属性
}

export default function PageWrapper({ children, className, bottomLine, innerClassName }: PageWrapperProps) {
  return (
    <div
      className={combineClasses(
        'ipad:pt-[109px] pt-[57px]',
        bottomLine && 'border-b-1 border-b-[#EFF0F3]',
        className,
      )}>
      {innerClassName ? <div className={innerClassName}>{children}</div> : children}
    </div>
  );
}

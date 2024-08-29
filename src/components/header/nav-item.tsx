import { combineClasses } from '@/lib/utils';
import { Link } from '@/navigation';
import MySvg from '@/components/my-svg';

export interface NavMenuItemProps {
  desc?: string;
  icon: string;
  title: string;
  className?: string;
  src: string;
  single?: boolean;
  contentClassName?: string;
  titleClassName?: string;
}

export default function NavItem({ single = false, ...props }: NavMenuItemProps) {
  const styles: React.CSSProperties = {
    padding: single ? '8px 12px' : '12px',
  };
  return (
    <div className={combineClasses('cursor-pointer hover:bg-[var(--bg-hover)] rounded-[2px]', props.className)}>
      <Link className={combineClasses('flex p-3 gap-3', props.contentClassName)} style={styles} href={props.src}>
        <MySvg src={props.icon}></MySvg>

        <div>
          <p className={combineClasses('text-[var(--text-color-1)] font-medium text-sm', props.titleClassName)}>
            {props.title}
          </p>

          {props.desc && <span className="text-[var(--text-color-3)] font-normal text-xs">{props.desc}</span>}
        </div>
      </Link>
    </div>
  );
}

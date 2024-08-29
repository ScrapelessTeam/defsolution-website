import { combineClasses } from '@/lib/utils';
import MySvg from './my-svg';
import { Link } from '@/navigation';

export default function Logo({ className, footer = false }: { className?: string; footer?: boolean }) {
  return (
    <div className={combineClasses('logo flex items-center lg:w-[140px] space-x-1 mr-8', className)}>
      <Link href="/">
        <MySvg src={'/assets/icons/Defsolution.svg'} />
      </Link>
    </div>
  );
}

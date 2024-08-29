import { combineClasses } from '@/lib/utils';
import { Link } from '@/navigation';
import MySvg from './my-svg';

interface FeatureIntroduceCardProps {
  icon: string;
  title: string;
  desc: string;
  more?: boolean;
  className?: string;
  href?: string;
}

export default function FeatureIntroduceCard({
  className,
  icon,
  title,
  desc,
  more = true,
  href = '/',
}: FeatureIntroduceCardProps) {
  return (
    <div>
      {more && (
        <Link href={href}>
          <div
            className={combineClasses(
              'iph:min-h-[268px] ipad:px-[40px] iph:px-[20px] px-[14px] ipad:py-[32px] iph:py-[16px] py-[10px] border border-solid border-[var(--border-color)] text-[#B9BBC6] hover:text-[var(--primary-color)] rounded-2xl cursor-pointer text-left bg-white',
              className,
            )}>
            <div className="flex justify-between">
              <MySvg src={icon} />

              {more && <MySvg src="/assets/icons/arrow-up-right.svg" />}
            </div>

            <div className="ipad:mt-4 iph:mt-2 mt-1">
              <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{title}</p>
              <p className="text-sm font-normal ipad:mt-3 iph:mt-2 mt-1 text-[var(--text-color-3)]">{desc}</p>
            </div>
          </div>
        </Link>
      )}
      {!more && (
        <div
          className={combineClasses(
            'iph:min-h-[268px] ipad:px-[40px] iph:px-[20px] px-[14px] ipad:py-[32px] iph:py-[16px] py-[10px] border border-solid border-[var(--border-color)] text-[#B9BBC6] hover:text-[var(--primary-color)] rounded-2xl cursor-pointer text-left bg-white',
            className,
          )}>
          <div className="flex justify-between">
            <MySvg src={icon} />

            {more && <MySvg src="/assets/icons/arrow-up-right.svg" />}
          </div>

          <div className="ipad:mt-4 iph:mt-2 mt-1">
            <p className="text-title-primary ipad:text-lg iph:text-base text-sm">{title}</p>
            <p className="ipad:mt-3 iph:mt-2 mt-1 text-sm font-normal text-[var(--text-color-3)]">{desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

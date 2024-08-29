import Image from 'next/image';
import { Link } from '@/navigation';
import type { Partner } from '@/types/partner';
import MySvg from '../my-svg';
import styles from './styles.module.css';
import { combineClasses } from '@/lib/utils';

interface PartnerItemProps {
  domId: string;
  title: string;
  list: Partner[];
}
export default function PartnerItem({ domId, title, list }: PartnerItemProps) {
  return (
    <div id={domId}>
      <div className="ipad:text-[28px] iph:text-[20px] text-base l:mb-8 ml:mb-4 mb-3 font-medium leading-9">
        {title}
      </div>
      <div className="ipad:grid-cols-4 iph:grid-cols-3 grid-cols-1 ml:gap-4 m:gap-3 gap-3 list-wrap grid">
        {list.map(item => {
          return (
            <Link href={item.link} target="_blank" key={item.partnerId}>
              <div
                className={combineClasses(
                  'cursor-pointer p-3 rounded-lg border border-solid border-[#E8ECF4] relative transition-all hover:-translate-y-2 hover:shadow-box hover:border-transparent hover:bg-white',
                  styles.partnerItem,
                )}>
                <div className="w-[40px] h-[40px] relative overflow-hidden">
                  <Image
                    src={item.iconUrl}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.desc}
                    quality={100}
                    className="w-[40px] h-[40px] object-contain rounded-lg"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <div className="text-lg font-semibold leading-6">{item.name}</div>

                  <div className="min-h-[64px] line-clamp-3 flex-1 text-sm font-normal leading-5 mt-1">{item.desc}</div>
                </div>
                <MySvg
                  className="absolute opacity-0 top-1 right-1 share-link-icon transition-opacity duration-300 ease-in-out w-[32px] h-[32px] icon"
                  src="/assets/icons/partner-share.svg"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

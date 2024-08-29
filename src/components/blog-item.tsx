import Image from 'next/image';
import { formatTime } from '@/lib/time';
import { Link } from '@/navigation';

interface BlogTagItem {
  label: string;
  value: string;
}

interface BlogItemProps {
  title: string;
  content: string;
  tags: BlogTagItem[];
  date: string;
  src: string;
  slug: string;
}

export default function BlogItem(props: BlogItemProps) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className="p-10 border-b border-b-[#EFF0F3] ipad:w-[1000px] iph:w-[700px] mx-auto border-solid flex justify-between cursor-pointer hover:border-transparent hover:shadow-blog hover:bg-white transition-all">
        <div className="ipad:w-[630px] iph:w-[460px]">
          <p className="text-blog-title mb-1">{props.title}</p>
          <p className="text-blog-desc text-ellipsis-2 mb-4">{props.content}</p>

          <div className="flex gap-2 mb-4">
            {props.tags.map((t, i) => {
              return (
                <div className="bg-[#F0F2F5] rounded py-1 px-2 text-black text-xs leading-5" key={i}>
                  {t.label}
                </div>
              );
            })}
          </div>

          <div>
            <span className="text-[var(--text-color-3)] text-sm font-normal">
              {formatTime(props.date, 'MMM DD, YYYY')}
            </span>
          </div>
        </div>

        <div className="ipad:w-[210px] ipad:h-[118px] iph:w-[180px] iph:h-[101px] relative">
          <Image src={props.src} quality={100} alt="" fill />
        </div>
      </div>
    </Link>
  );
}

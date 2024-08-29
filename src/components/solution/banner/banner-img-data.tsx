import Image from 'next/image';

export default function BannerImgData() {
  return (
    <div className="mx-auto absolute iph:w-[563px] w-[340px] iph:h-[482px] h-[291px] ipad:top-[80px] iph:top-[340px] top-[412px] ipad:-right-[20px] right-[50%] ipad:translate-x-[0] translate-x-[50%]">
      <Image src={`/assets/images/solution/data-isolation.png`} quality={100} alt="" fill />
    </div>
  );
}

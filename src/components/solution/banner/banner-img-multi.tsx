import Image from 'next/image';

export default function BannerImgMulti() {
  return (
    <div className="mx-auto absolute iph:w-[480px] w-[340px] iph:h-[480px] h-[340px] ipad:top-[80px] iph:top-[280px] top-[284px] ipad:right-[32px] right-[50%] ipad:translate-x-0 translate-x-[50%]">
      <Image src={`/assets/images/solution/multi-account.png`} quality={100} alt="" fill />
    </div>
  );
}

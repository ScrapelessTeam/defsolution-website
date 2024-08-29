import Image from 'next/image';

export default function BannerImgAnti() {
  return (
    <div className="mx-auto absolute iph:w-[580px] w-[340px] iph:h-[428px] h-[250px] ipad:top-[80px] iph:top-[299px] top-[317px] ipad:-right-[16px] right-[50%] ipad:translate-x-0 translate-x-[50%]">
      <Image src={`/assets/images/solution/anti-detect-bot.png`} quality={100} alt="" fill />
    </div>
  );
}

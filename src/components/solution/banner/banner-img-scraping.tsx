import Image from 'next/image';

export default function BannerImgScraping() {
  return (
    <div className="mx-auto absolute iph:w-[538px] w-[340px] iph:h-[480px] h-[303px] ipad:top-[80px] ipad:right-0 iph:top-[190px] top-[228px] right-[50%] ipad:translate-x-0 translate-x-[50%]">
      <Image src={`/assets/images/solution/scraping.png`} quality={100} alt="" fill />
    </div>
  );
}

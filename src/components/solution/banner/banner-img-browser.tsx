import Image from 'next/image';

export default function BannerImgBrowser() {
  return (
    <div className="mx-auto absolute iph:w-[496px] iph:h-[476px] w-[340px] h-[326px] ipad:top-[80px] iph:top-[169px] top-[262px] ipad:right-0 right-[50%] ipad:translate-x-0 translate-x-[50%]">
      <Image src={`/assets/images/solution/fingerprint-browser.png`} quality={100} alt="" fill />
    </div>
  );
}

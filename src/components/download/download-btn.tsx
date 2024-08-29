'use client';

import { Link } from '@/navigation';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

import type { DownloadItem } from '@/types/download';

export default function DownloadBtn({ item }: { item: DownloadItem }) {
  const t = useTranslations();
  function handleCountDownloadNum() {
    // handleCountAppDownload(item);
  }

  return (
    <>
      {item.downloadURL ? (
        <Link href={item.downloadURL}>
          <Button className="min-w-[240px]" onClick={handleCountDownloadNum}>
            <span>{t('download.downloadBtnText')}</span>
          </Button>
        </Link>
      ) : (
        <Button disabled={true} className="min-w-[240px]">
          <span>{t('download.comingSoon')}</span>
        </Button>
      )}
    </>
  );
}

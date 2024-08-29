'use client';

import { appHost } from '@/config';
import { formatWorkflowUsedNum } from '@/lib/format';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { openTidio } from '@/lib/utils';
import { formatTableTime } from '@/lib/time';
import MarkdownPreview from '../markdown-preview';
import MySvg from '../my-svg';

interface RpaMarketDetailProps {
  detailInfo: {
    workflowId: string;
    metadata: {
      version: number;
    };
    userId: string;
    name: string;
    category: string;
    imgUrl: string;
    shortDesc: string;
    detailDesc: string;
    templateId: string;
    createdAt: string;
    updatedAt: string;
    action: string;
    used: number;
  };
}

export default function RpaMarketDetail({ detailInfo }: RpaMarketDetailProps) {
  const t = useTranslations();

  const appTemplateDetailAddress = appHost + '/app/rpa/workflow-details?templateId=' + detailInfo.templateId;
  return (
    <div>
      <div className="head flex justify-between items-center mb-2 text-sm">
        <div className="flex left items-end space-x-5">
          <div className="flex items-center space-x-4">
            <Image src={detailInfo?.imgUrl} alt={detailInfo.name} quality={100} width={40} height={40} />
            <div className="flex flex-col justify-between">
              <div className="title font-medium leading-6 text-base">{detailInfo?.name || '-'}</div>
              <div className="flex items-center space-x-[40px]">
                <div className="category leading-5.5">{detailInfo?.category}</div>
                <div className="flex items-center space-x-6 text-xs">
                  <div className="flex items-center space-x-1">
                    <MySvg src="/assets/icons/clock.svg" />

                    <span className="text-[#646E83]">
                      {t('rpa.store.updateTime', {
                        time: detailInfo?.updatedAt && formatTableTime(detailInfo.updatedAt),
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MySvg src="/assets/icons/person.svg" />

                    <span className="text-[#646E83]">{formatWorkflowUsedNum(detailInfo?.used || 0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right flex space-x-4">
          <a href={appTemplateDetailAddress} target="_blank">
            <Button>{t('start')}</Button>
          </a>
        </div>
      </div>

      <div className="text-sm text-[#646E83] leading-5 mb-3 line-clamp-2">{detailInfo?.shortDesc}</div>

      <div className="border-b border-[#E8ECF4] flex justify-between items-center py-2">
        <span className="text-[#646E83] font-medium leading-5.5 text-sm">{t('rpa.store.details')}</span>
        <div className="flex items-center justify-center space-x-2" onClick={openTidio}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="cursor-pointer"
            fill="#646E83">
            <path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z" />
            <path d="M9.74375 4.94844C9.275 4.5375 8.65625 4.3125 8 4.3125C7.34375 4.3125 6.725 4.53906 6.25625 4.94844C5.76875 5.375 5.5 5.94844 5.5 6.5625V6.68125C5.5 6.75 5.55625 6.80625 5.625 6.80625H6.375C6.44375 6.80625 6.5 6.75 6.5 6.68125V6.5625C6.5 5.87344 7.17344 5.3125 8 5.3125C8.82656 5.3125 9.5 5.87344 9.5 6.5625C9.5 7.04844 9.15625 7.49375 8.62344 7.69844C8.29219 7.825 8.01094 8.04687 7.80937 8.3375C7.60469 8.63437 7.49844 8.99062 7.49844 9.35156V9.6875C7.49844 9.75625 7.55469 9.8125 7.62344 9.8125H8.37344C8.44219 9.8125 8.49844 9.75625 8.49844 9.6875V9.33281C8.49925 9.18113 8.54574 9.03321 8.63187 8.90834C8.71799 8.78347 8.83975 8.68746 8.98125 8.63281C9.90312 8.27813 10.4984 7.46563 10.4984 6.5625C10.5 5.94844 10.2312 5.375 9.74375 4.94844ZM7.375 11.4375C7.375 11.6033 7.44085 11.7622 7.55806 11.8794C7.67527 11.9967 7.83424 12.0625 8 12.0625C8.16576 12.0625 8.32473 11.9967 8.44194 11.8794C8.55915 11.7622 8.625 11.6033 8.625 11.4375C8.625 11.2717 8.55915 11.1128 8.44194 10.9956C8.32473 10.8783 8.16576 10.8125 8 10.8125C7.83424 10.8125 7.67527 10.8783 7.55806 10.9956C7.44085 11.1128 7.375 11.2717 7.375 11.4375Z" />
          </svg>

          <span className="text-[#9BA2B0] cursor-pointer leading-5 text-xs">{t('rpa.store.reportIssues')}</span>
        </div>
      </div>

      <div className="description min-h-[500px]">
        <MarkdownPreview
          className="policy my-editor-preview pt-5"
          previewTheme="github"
          editorId="policyView"
          modelValue={detailInfo?.detailDesc || '-'}
        />
      </div>
    </div>
  );
}

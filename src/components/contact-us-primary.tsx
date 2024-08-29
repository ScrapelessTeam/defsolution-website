'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import ContactUsBtn from './contact-us-btn';

export default function ContactUsPrimary() {
  const t = useTranslations();
  const [contactOpen, setContactOpen] = useState(false);
  function onContactClick() {
    setContactOpen(true);
  }

  function onContactClose() {
    setContactOpen(false);
  }

  return (
    <ContactUsBtn open={contactOpen} onClose={onContactClose}>
      <Button
        className="min-w-[176px] h-[58px] px-2 ipad:text-xl iph:text-base text-[15px] bg-[var(--primary-color)] text-white"
        color="primary"
        onClick={onContactClick}>
        {t('contact-us')}
      </Button>
    </ContactUsBtn>
  );
}

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from '@/components/contact-form';

interface ContactModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export default function ContactModalShadcn(props: ContactModalProps) {
  const t = useTranslations();

  const [open, setOpen] = useState<boolean>(false);

  function onClose() {
    setOpen(false);
  }

  function onSubmitSuccess() {
    onClose();
    props.onClose && props.onClose();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <VisuallyHidden.Root asChild>
        <DialogTitle></DialogTitle>
      </VisuallyHidden.Root>
      <DialogContent className="ipad:w-[970px] iph:w-[514px] w-[340px]" aria-describedby={undefined}>
        <div className="flex justify-between">
          <div className="ipad:block hidden w-[460px] bg-[var(--bg-color)] p-6">
            <p className="text-[var(--text-color-1)] text-[24px] font-semibold">{t('contact.subTitle')}</p>

            <ul className="pl-[28px] mt-[24px] font-normal">
              <li className="list-disc">
                <span className="text-[var(--text-color-4)] text-lg">{t('contact.desc')}</span>
              </li>
              <li className="list-disc my-8">
                <span className="text-[var(--text-color-4)] text-lg">{t('contact.desc2')}</span>
              </li>
              <li className="list-disc">
                <span className="text-[var(--text-color-4)] text-lg">{t('contact.desc3')}</span>
              </li>
            </ul>
          </div>
          <ContactForm
            toPolicy={onClose}
            className="ipad:w-[460px] w-full"
            border={false}
            onSuccess={onSubmitSuccess}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

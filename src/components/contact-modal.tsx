'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@nextui-org/react';
import ContactForm from '@/components/contact-form';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal(props: ContactModalProps) {
  const t = useTranslations();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (props.open) {
      onOpen();
    }
  }, [onOpen, props]);

  function onOpenChange(isOpen: boolean) {
    if (!isOpen) {
      onClose();
      props.onClose();
    }
  }

  function onSubmitSuccess() {
    onClose();
    props.onClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          wrapper: 'z-[1001] items-center',
          body: 'p-5',
          base: 'max-w-[960px] ipad:w-[960px] iph:w-[630px] w-[340px]',
          backdrop: 'z-[1000]',
        }}>
        <ModalContent>
          {onClose => (
            <>
              <ModalBody>
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

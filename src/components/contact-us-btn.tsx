'use client';

// import ContactModal from '@/components/contact-modal';
import ContactModalShadcn from './contact-modal-shadcn';

interface ContactUsBtnProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export default function ContactUsBtn({ children, open, onClose }: ContactUsBtnProps) {
  function onContactClose() {
    onClose && onClose();
  }

  return (
    <>
      {/* {children} */}
      {/* {open && <ContactModal open={open} onClose={onContactClose} />} */}
      <ContactModalShadcn onClose={onContactClose}>{children}</ContactModalShadcn>
    </>
  );
}

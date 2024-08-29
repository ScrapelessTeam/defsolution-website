'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { Link } from '@/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { combineClasses } from '@/lib/utils';
import { z } from 'zod';
import MySvg from '../my-svg';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

export default function CooperateWithUsForm({ locale }: { locale: string }) {
  const t = useTranslations();

  // 基本的 email 验证
  const emailSchema = z
    .string()
    .min(2, { message: t('partner.emailRequired') })
    .email({ message: t('partner.emailInvalid') })
    .refine(
      email => {
        const reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        return reg.test(email);
      },
      {
        message: t('partner.emailInvalid'),
      },
    );

  const FormSchema = z.object({
    name: z.string().min(2, { message: t('partner.nameRequired') }),
    email: emailSchema,
    subject: z.string().min(2, { message: t('partner.subjectRequired') }),
    message: z.string().min(2, { message: t('partner.messageRequired') }),
  });

  const [saveBtnLoading, setSaveBtnLoading] = useState<boolean>(false);
  const [showShake, setShowShake] = useState<boolean>(false);
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // 获取验证状态
    const isValid = await form.trigger();
    if (!isValid) return;

    if (isAgree === false) {
      setShowShake(true);

      setTimeout(() => {
        setShowShake(false);
      }, 1000);
      return;
    }

    try {
      setSaveBtnLoading(true);
      const postData = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const res = await fetch(`${baseURL}/partners/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        // TODO message 提示
        form.reset();
        setIsAgree(false);
        setEmail(data.email);
        setSubmitSuccess(true);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setSaveBtnLoading(false);
    }
  }

  function onOkClick() {
    setSubmitSuccess(false);
    setEmail('');
  }

  return (
    <div>
      {!submitSuccess && <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('partner.name')}</FormLabel>

                <FormControl>
                  <FormItem>
                    <Input {...field} />
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('partner.email')}</FormLabel>

                <FormControl>
                  <FormItem>
                    <Input {...field} />
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('partner.subject')}</FormLabel>

                <FormControl>
                  <FormItem>
                    <Input {...field} />
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('partner.message')}</FormLabel>

                <FormControl>
                  <FormItem>
                    <Input {...field} />
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className={combineClasses('flex items-center space-x-2 text-xs mb-4', showShake && 'animate-shake')}>
            <Checkbox checked={isAgree} onCheckedChange={val => setIsAgree(val as boolean)} />
            <div className="text-[#9BA2B0]">
              {t.rich('partner.partnerPolicy', {
                tc: chunks => (
                  <Link href="/policy/terms-conditions" target="_blank" className="text-[#646aee] underline">
                    {chunks}
                  </Link>
                ),
                pp: chunks => (
                  <Link href="/policy/privacy" target="_blank" className="text-[#646aee] underline">
                    {chunks}
                  </Link>
                ),
                cp: chunks => (
                  <Link href="/policy/cookie" target="_blank" className="text-[#646aee] underline">
                    {chunks}
                  </Link>
                ),
              })}
            </div>
          </div>

          <div className="w-fit">
            <Button type="submit" className="!rounded" loading={saveBtnLoading}>
              {t('partner.submitMessage')}
            </Button>
          </div>
        </form>
      </Form>}

      {submitSuccess && <div className="flex flex-col justify-center items-center h-[476px]">
          <div className="text-center">
            <div className="flex justify-center">
              <MySvg src="/assets/icons/success.svg" />
            </div>

            <p className="text-[var(--text-color-1)] text-xl mt-5 font-semibold">
              {t('common.we-will-contact-you-shortly')}
            </p>

            <p className="text-[var(--text-color-4)] text-lg mt-3">
              {t('common.you-will-receive-an-email-to')}
              <span className="text-[var(--primary-color)]"> {email} </span>
              {t('common.with-more-details')}
            </p>
          </div>

          <div>
            <Button className="min-w-[80px] h-[46px] mt-5" type="submit" onClick={onOkClick}>
              {t('common.ok')}
            </Button>
          </div>
        </div>}
    </div>
  );
}

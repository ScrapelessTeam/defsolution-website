'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { combineClasses, isEmail } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from '@/navigation';
import MySvg from './my-svg';

interface ContactFormProps {
  border?: boolean;
  bg?: boolean;
  width?: number;
  toPolicy?: () => void;
  className?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  border = true,
  bg = true,
  width = 609,
  toPolicy,
  className,
  onSuccess,
}: ContactFormProps) {
  const t = useTranslations();

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const formSchema = z.object({
    company: z.string().refine(value => true),
    email: z
      .string()
      .min(1, t('form.mail'))
      .refine(value => isEmail(value), {
        message: t('form.valid-mail'),
      }),
    name: z
      .string()
      .min(1, t('form.valid-name'))
      .refine(value => value, {
        message: t('form.valid-name'),
      }),
    subject: z
      .string()
      .min(1, t('form.valid-name'))
      .refine(value => value, {
        message: t('form.valid-name'),
      }),
    note: z
      .string()
      .min(1, t('form.valid-note'))
      .refine(value => value, {
        message: t('form.valid-note'),
      }),
    agree: z.boolean().refine(value => value, {
      message: t('form.valid-agree'),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      note: '',
      company: '',
      subject: 'Corporate Questions',
      agree: false,
    },
  });

  const styles: React.CSSProperties = {
    backgroundColor: bg ? 'white' : 'transparent',
    border: border ? '1px solid #EFF1FF' : 'none',
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // const params = {
    //   fullName: values.name,
    //   email: values.email,
    //   content: values.note,
    //   companyName: values.company,
    //   subject: values.subject,
    // };
    // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    // const url = `${baseURL}/public/contact-us-v2`;

    try {
      // await fetch(url, {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(params),
      // });
      setSubmitSuccess(true);
      setEmail(values.email);
    } catch (e) {
      // too many request
    }
  }

  function onOkClick() {
    setSubmitSuccess(false);
    onSuccess && onSuccess();
    form.reset();
  }

  function onPolicyClick() {
    toPolicy && toPolicy();
  }

  return (
    <div className={combineClasses('ipad:p-10 iph:p-5 p-[14px] rounded-[8px]', className)} style={styles}>
      {!submitSuccess && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="ipad:space-y-8 iph:space-y-4 space-y-3">
            <div className='flex gap-4'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormLabel>{t('contact.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('common.please-enter')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <p className='mb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{t('contact.company')} <span className='text-[var(--text-color-3)] font-normal'>({t('contact.optional')})</span></p>
                    <FormControl>
                      <Input placeholder={t('common.please-enter')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel>{t('contact.subject')}</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full h-10">
                        <SelectValue placeholder={t('contact.corporate')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Corporate Questions">{t('contact.corporate')}</SelectItem>
                          <SelectItem value="General Questions">{t('contact.general')}</SelectItem>
                          <SelectItem value="Customization Requests">{t('contact.custom')}</SelectItem>
                          <SelectItem value="Other Questions">{t('contact.other')}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel>{t('contact.email')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('common.please-enter')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.how-can-we-help')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('contact.you-can-enter-a-description-of-your-custom-requirements')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-start pt-3 pb-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="text-xs">
                      {t('contact.agree')}&nbsp;
                      <Link
                        href="/policy/terms-conditions"
                        className="text-[var(--primary-color)]"
                        onClick={onPolicyClick}>
                        {t('contact.terms-and-conditions')}
                      </Link>
                      &nbsp;{t('contact.and')}&nbsp;
                      <Link href="/policy/privacy" className="text-[var(--primary-color)]" onClick={onPolicyClick}>
                        {t('contact.privacy-policy')},&nbsp;
                      </Link>
                      <Link href="/policy/cookie" className="text-[var(--primary-color)]" onClick={onPolicyClick}>
                        {t('contact.cookies-policy')}.
                      </Link>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button className="min-w-[164px] h-[46px]" type="submit">
                {t('contact.submit-form')}
              </Button>
            </div>
          </form>
        </Form>
      )}

      {submitSuccess && (
        <div className="flex flex-col justify-between items-center h-full">
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
            <Button className="min-w-[80px] h-[46px]" type="submit" onClick={onOkClick}>
              {t('common.ok')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

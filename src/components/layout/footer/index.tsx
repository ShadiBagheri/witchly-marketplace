'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardTitle, Typography } from '@/components/ui';
import { company, explore, help, infoCards, support } from './constants';
import {
  ExternalLinkIcon,
  InstagramIcon,
  LoadingCircleIcon,
  MailIcon,
  SendIcon,
  SparklesIcon,
  TiktokIcon,
} from '@/components/shared/icons';
import { InfoCardsProps } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { TextInput } from '@/components/ui/text-input';

const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please Enter your email address' })
    .email({ message: 'Please enter invalid email address' }),
});

type EmailFormValues = z.infer<typeof emailSchema>;

export const EmailForm = () => {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: EmailFormValues) => {
    console.log('Email submitted:', values.email);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-4 md:flex-row">
      <div className="w-full md:w-auto">
        <TextInput
          {...form.register('email')}
          type="email"
          startIcon={<MailIcon className="text-secondary-400" />}
          placeholder="Enter your email address"
          aria-invalid={form.formState.errors.email ? 'true' : 'false'}
          classNames={{
            root: 'w-full md:w-80 h-11 md:h-15 flex px-4 py-3 gap-2.5 rounded-xl border border-neutral-400 bg-white/15 backdrop-blur-md',
            input: 'h-full w-full',
          }}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>

      <Button
        startIcon={<SendIcon />}
        type="submit"
        className="body-12 md:body-7 bg-warning-500 text-secondary-950 shadow-warning-500 h-11 w-full rounded-xl py-2.5 transition-all hover:scale-105 hover:shadow-lg md:h-14 md:w-50 md:rounded-2xl md:py-4"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? <LoadingCircleIcon /> : 'Subscribe'}
      </Button>
    </form>
  );
};

const ExploreItem: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-2.5 lg:space-y-3">
      {explore.map((item, index) => (
        <Typography key={index} asChild className="body-15 xl:body-12 text-neutral-300">
          <Link
            href={item.href}
            className="group hover:text-secondary-400 inline-flex items-center gap-1 transition-transform duration-300 hover:translate-x-4"
          >
            <item.icon className="absolute -left-6 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            {item.label}
          </Link>
        </Typography>
      ))}
    </nav>
  );
};

const CompanyItem: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-2.5 lg:space-y-3">
      {company.map((item, index) => (
        <Typography key={index} asChild className="body-15 xl:body-12 text-neutral-300">
          <Link
            href={item.href}
            className="group hover:text-secondary-400 inline-flex items-center gap-1 transition-transform duration-300 hover:translate-x-4"
          >
            <item.icon className="absolute -left-6 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            {item.label}
          </Link>
        </Typography>
      ))}
    </nav>
  );
};

const SupportItem: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-2.5 lg:space-y-3">
      {support.map((item, index) => (
        <Typography key={index} asChild className="body-15 xl:body-12 text-neutral-300">
          <Link
            href={item.href}
            className="group hover:text-secondary-400 inline-flex items-center gap-1 transition-transform duration-300 hover:translate-x-4"
          >
            <item.icon className="absolute -left-6 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            {item.label}
          </Link>
        </Typography>
      ))}
    </nav>
  );
};

const HelpItem: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-2.5 lg:space-y-3">
      {help.map((item, index) => (
        <Typography key={index} asChild className="body-15 xl:body-12 text-neutral-300">
          <Link
            href={item.href}
            className="group hover:text-secondary-400 inline-flex items-center gap-1 transition-transform duration-300 hover:translate-x-4"
          >
            <item.icon className="absolute -left-6 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            {item.label}
          </Link>
        </Typography>
      ))}
    </nav>
  );
};

const InfoCardsItem = ({ title, Icon }: InfoCardsProps) => {
  return (
    <Card className="flex w-full items-center justify-start rounded-2xl border border-neutral-400 bg-white/15 p-3 backdrop-blur-md xl:p-5">
      <CardTitle className="flex w-full items-center justify-start gap-3">
        <div className="bg-warning-400 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl xl:h-11 xl:w-11">
          <div className="text-secondary-950 flex h-5 w-5 items-center justify-center xl:h-6 xl:w-6">
            {Icon && <Icon className="h-full w-full" />}
          </div>
        </div>
        <Typography className="body-18 lg:body-15 text-neutral-0 text-left">{title}</Typography>
      </CardTitle>
    </Card>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-purple-950 pt-20 pb-20 md:pb-8">
      <div className="container mb-16 flex w-full flex-col items-center justify-center gap-5">
        <div className="border-secondary-400 flex items-center gap-3 rounded-full border px-3.5 py-1.5">
          <MailIcon className="text-warning-400 size-4.5 sm:size-5" />
          <Typography className="body-15 xl:body-12 text-neutral-300">Stay Connected</Typography>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-center gap-1 text-center lg:flex-row">
            <Typography className="heading-2 xl:display-3 text-neutral-0">
              Get Mystical Insights
            </Typography>
            <Typography className="heading-2 xl:display-3 text-secondary-200">Delivered</Typography>
            <Typography className="heading-2 xl:display-3 text-neutral-0">Weekly</Typography>
          </div>
          <Typography className="text-secondary-200 body-10 md:body-7 text-center">
            Join 207+ seekers receiving exclusive readings, special offers, and spiritual guidance.
          </Typography>
        </div>
        <div>
          <EmailForm />
        </div>
        <div>
          <Typography className="text-secondary-300 body-18 lg:body-15 text-center">
            By subscribing, you acknowledge that you have read and agree to our
            <Link href="/" className="text-warning-500 px-1 underline underline-offset-4">
              Terms of Service
            </Link>
            and
            <Link href="/" className="text-warning-500 px-1 underline underline-offset-4">
              Privacy Policy.
            </Link>
          </Typography>
        </div>
      </div>

      <div className="border-secondary-900 container flex w-full flex-col items-start justify-center border-y py-10 lg:flex-row xl:py-16">
        <div className="mb-10 flex w-full flex-col items-start justify-start gap-5 md:mb-14 lg:mb-0 lg:w-2/5 lg:gap-7">
          <div className="flex items-start justify-start gap-3">
            <div className="bg-warning-500 flex h-10 w-10 items-center justify-center rounded-xl p-2 xl:h-11 xl:w-11">
              <SparklesIcon className="text-secondary-950 size-7" />
            </div>
            <div className="flex flex-col">
              <Typography className="text-neutral-0 heading-2 lg:heading-3 xl:heading-2">
                Witchly
              </Typography>
              <Typography className="text-secondary-400 body-18 lg:body-15 xl:body-18">
                Your Spiritual Journey
              </Typography>
            </div>
          </div>
          <div className="w-full sm:pr-15 xl:w-sm xl:pr-0">
            <Typography className="body-15 xl:body-12 text-neutral-300">
              Connect with verified spiritual practitioners for personalized readings, guidance, and
              transformative experiences.
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <MailIcon className="text-secondary-400 size-4.5 sm:size-5" />
            <Typography className="body-15 xl:body-12 text-neutral-300">
              info@Witchly.co.uk
            </Typography>
          </div>
          <div className="flex gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-400 bg-white/15 backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white/20 sm:h-9 sm:w-9"
            >
              <InstagramIcon className="text-neutral-0 size-4.5 sm:size-5" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-400 bg-white/15 backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white/20 sm:h-9 sm:w-9"
            >
              <TiktokIcon className="text-neutral-0 size-5 sm:size-5.5" />
            </a>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:w-3/5">
          <div className="flex flex-col items-start gap-5">
            <Typography className="body-12 xl:body-9 text-neutral-0">Explore</Typography>
            <ExploreItem />
          </div>
          <div className="flex flex-col items-start gap-5">
            <Typography className="body-12 xl:body-9 text-neutral-0">Company</Typography>
            <CompanyItem />
          </div>
          <div className="flex flex-col items-start gap-5">
            <Typography className="body-12 xl:body-9 text-neutral-0">Support</Typography>
            <SupportItem />
          </div>
          <div className="flex flex-col items-start gap-5">
            <Typography className="body-12 xl:body-9 text-neutral-0">Help</Typography>
            <HelpItem />
          </div>
        </div>
      </div>

      <div className="border-secondary-900 container grid w-full grid-cols-2 gap-8 border-b py-8 lg:grid-cols-4">
        {infoCards.map((item, index) => (
          <InfoCardsItem key={index} {...item} />
        ))}
      </div>

      <div className="border-secondary-900 container flex w-full flex-col items-center justify-between gap-4 pt-8 sm:flex-row sm:gap-8">
        <Typography className="body-18 lg:body-15 text-neutral-300">
          © 2025 Witchly. All rights reserved.
        </Typography>
        <div className="flex items-center gap-4 md:gap-8">
          <Typography className="body-18 lg:body-15 hover:text-secondary-400 text-neutral-300 transition duration-300">
            <Link href="/" className="flex items-center gap-1">
              Privacy Policy
              <ExternalLinkIcon className="size-3" />
            </Link>
          </Typography>
          <Typography className="body-18 lg:body-15 hover:text-secondary-400 text-neutral-300 transition duration-300">
            <Link href="/" className="flex items-center gap-1">
              Terms of Service
              <ExternalLinkIcon className="size-3" />
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

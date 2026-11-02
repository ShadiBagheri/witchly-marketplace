import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import RootLayout from '@/layouts/root-layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Witchly Marketplace',
  description: 'Discover products and services on Witchly Marketplace.',
};

export default function Layout({ children }: PropsWithChildren) {
  return <RootLayout>{children}</RootLayout>;
}

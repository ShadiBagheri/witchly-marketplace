import { ledger } from '@/config/fonts/fonts';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html className={`${ledger.variable}`} dir="ltr" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}

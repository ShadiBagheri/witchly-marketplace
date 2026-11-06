import { ledger } from '@/config/fonts/fonts';
import { Providers } from '@/provider';
import { Toaster } from 'sonner';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html
      className={`${ledger.variable}`}
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <Providers>
          {children}
          <Toaster position="bottom-right" richColors />
        </Providers>
      </body>
    </html>
  );
}

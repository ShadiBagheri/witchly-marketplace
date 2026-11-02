import localFont from 'next/font/local';

export const ledger = localFont({
  src: [
    {
      path: './ttf/Ledger-Regular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-ledger',
  display: 'swap',
});

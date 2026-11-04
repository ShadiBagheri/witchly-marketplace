import { FC, PropsWithChildren } from 'react';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

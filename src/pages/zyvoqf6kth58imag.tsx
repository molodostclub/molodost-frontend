import { FC } from 'react';
import { Promo } from '@/core/Promo';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function Anketa() {
  return (
    <>
      <PageMeta title="Промо" />
      <InnerPageHeader />
      <PageCover src="/images/promo/promo-main.jpg" />
      <Promo />
      <Footer />
    </>
  );
}

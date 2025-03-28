import { FC } from 'react';
import { May } from '@/core/May';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function MayPage() {
  return (
    <>
      <PageMeta title="Каталка" />
      <InnerPageHeader />
      <PageCover src="/images/may/main.jpeg" />
      <May />
      <Footer />
    </>
  );
}
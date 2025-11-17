import { FC } from 'react';
import { Katalka } from '@/core/Katalka';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function AdultsPage() {
  return (
    <>
      <PageMeta title="ФЕСТИВАЛЬ" />
      <InnerPageHeader />
      <PageCover src="/images/katalka/main_2026.jpg" />
      <Katalka />
      <Footer />
    </>
  );
}
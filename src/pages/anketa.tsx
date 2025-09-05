import { FC } from 'react';
import { AnketaPage } from '@/core/AnketaPage';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function Anketa() {
  return (
    <>
      <PageMeta title="Анкета" />
      <InnerPageHeader />
      <PageCover src="/images/anketa/large.jpeg" />
      <AnketaPage />
      <Footer />
    </>
  );
}

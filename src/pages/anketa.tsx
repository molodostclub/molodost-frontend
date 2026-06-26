import { FC } from 'react';
import { AnketaPage } from '@/core/AnketaPage';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function Anketa() {
  return (
    <>
      <PageMeta title="Анкета" />
      <InnerPageHeader />
      <PageCover src="/images/anketa/large.webp" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Анкета Алтай' }]} />
      <AnketaPage />
      <Footer />
    </>
  );
}

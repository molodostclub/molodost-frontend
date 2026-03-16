import { FC } from 'react';
import { Katalka } from '@/core/Katalka';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function AdultsPage() {
  return (
    <>
      <PageMeta title="Каталка" />
      <InnerPageHeader /> 
      <PageCover src="/images/katalka/main_2026.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Каталка' }]} />
      <Katalka />
      <Footer />
    </>
  );
}
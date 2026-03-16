import { LegalDocumentsBaikal } from '@/core/LegalDocuments';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function PravovieDocumentiBaikal() {
  return (
    <>
      <PageMeta title="Реквизиты — Молодость на Байкале" />
      <InnerPageHeader />
      <PageCover src="/images/baikal/requisits.jpg" />
      <Breadcrumb
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Молодость на Байкале', href: '/baikal' },
          { label: 'Реквизиты' },
        ]}
      />
      <LegalDocumentsBaikal />
      <Footer variant="baikal" />
    </>
  );
}

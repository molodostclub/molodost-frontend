import { LegalDocuments } from '@/core/LegalDocuments';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function ChtoMyEdim() {
  return (
    <>
      <PageMeta title="Правовые документы" />
      <InnerPageHeader />
      <PageCover src="/images/main-cover2.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Реквизиты' }]} />
      <LegalDocuments />
      <Footer />
    </>
  );
}

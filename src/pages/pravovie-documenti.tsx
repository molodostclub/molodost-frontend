import { LegalDocuments } from '@/core/LegalDocuments';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function ChtoMyEdim() {
  return (
    <>
      <PageMeta title="Правовые документы" />
      <InnerPageHeader />
      <PageCover src="/images/main-cover2.jpg" />
      <LegalDocuments />
      <Footer />
    </>
  );
}

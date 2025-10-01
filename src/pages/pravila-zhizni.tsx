import { PravilaZhizni } from '@/core/PravilaZhizni';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function PravilaKolivinga() {
  return (
    <>
      <PageMeta title="Правила жизни" />
      <InnerPageHeader />
      <PageCover src="/images/pravila-zhizni/pravila_main.jpg" />
      <PravilaZhizni />
      <Footer />
    </>
  );
}
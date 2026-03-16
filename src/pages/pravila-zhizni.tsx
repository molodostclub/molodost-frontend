import { PravilaZhizni } from '@/core/PravilaZhizni';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function PravilaKolivinga() {
  return (
    <>
      <PageMeta title="Правила жизни" />
      <InnerPageHeader />
      <PageCover src="/images/pravila-zhizni/pravila_main.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Правила жизни' }]} />
      <PravilaZhizni />
      <Footer />
    </>
  );
}
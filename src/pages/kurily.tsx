import { Kurily } from '@/core/Kurily';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function KurilyPage() {
  return (
    <>
      <PageMeta title="Курилы" />
      <InnerPageHeader />
      <PageCover src="/images/kurily/main.webp" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Курилы' }]} />
      <Kurily />
      <Footer />
    </>
  );
}

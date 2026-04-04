import { Festival } from '@/core/Festival';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function NashFestival() {
  return (
    <>
      <PageMeta title="Наш Фестиваль" />
      <InnerPageHeader />
      <PageCover src="/images/festival/main.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Наш Фестиваль' }]} />
      <Festival />
      <Footer />
    </>
  );
}

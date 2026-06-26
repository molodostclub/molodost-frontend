import { HowToGet } from '@core/HowToGet';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function KakPopast() {
  return (
    <>
      <PageMeta title="Как к нам попасть" />
      <InnerPageHeader />
      <PageCover src="/images/kak-popast/tourbase.webp" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Как к нам попасть' }]} />
      <HowToGet />
      <Footer />
    </>
  );
}

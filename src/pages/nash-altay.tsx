import { OurAltay } from '@core/OurAltay';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@/shared/components';

export default function NashAltay() {
  return (
    <>
      <PageMeta title="Наш алтай" />
      <InnerPageHeader />
      <PageCover src="/images/our-altay-cover.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Наш Алтай' }]} />
      <OurAltay />
      <Footer />
    </>
  );
}

import { PageContainer, Postscriptum } from '@core/Home';
import { Breadcrumb, InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
import { HouseOnMars } from '@/core/HouseOnMars';

export default function HouseOnMarsPage() {
  return (
    <>
      <PageMeta title="Дом на марсе" />
      <InnerPageHeader />
      <PageCover src="/images/house-on-mars-cover-new.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Марс', href: '/mars' }, { label: 'Дом на Марсе' }]} />
      <PageContainer>
        <HouseOnMars />
        <Postscriptum />
      </PageContainer>
      <Footer />
    </>
  );
}

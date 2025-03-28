import { PageContainer, Postscriptum } from '@core/Home';
import { InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
import { HouseOnMars } from '@/core/HouseOnMars';

export default function HouseOnMarsPage() {
  return (
    <>
      <PageMeta title="Дом на марсе" />
      <InnerPageHeader />
      <PageCover src="/images/house-on-mars-cover-new.jpg" />
      <PageContainer>
        <HouseOnMars />
        <Postscriptum />
      </PageContainer>
      <Footer />
    </>
  );
}

import { OurAltay } from '@core/OurAltay';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@/shared/components';

export default function NashAltay() {
  return (
    <>
      <PageMeta title="Наш алтай" />
      <InnerPageHeader />
      <PageCover src="/images/our-altay-cover.jpg" />
      <OurAltay />
      <Footer />
    </>
  );
}

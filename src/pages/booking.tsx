
import { Booking } from '@core/Booking';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function KakPopast() {
  return (
    <>
      <PageMeta title="Забронировать проживание" />
      <InnerPageHeader />
      <PageCover src="/images/booking/main.jpg" />
      <Booking />
      <Footer />
    </>
  );
}

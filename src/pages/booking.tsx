
import { Booking } from '@core/Booking';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function BookingPage() {
  return (
    <>
      <PageMeta title="Забронировать проживание" />
      <InnerPageHeader />
      <PageCover src="/images/booking/main.webp" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Забронировать' }]} />
      <Booking />
      <Footer />
    </>
  );
}

import { OurContacts } from '@core/OurContacts';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function NashyKontakty() {
  return (
    <>
      <PageMeta title="Наши контакты" />
      <InnerPageHeader />
      <PageCover src="/images/our-contacts-cover.jpg" />
      <OurContacts />
      <Footer />
    </>
  );
}

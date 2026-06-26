import { OurContacts } from '@core/OurContacts';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function NashyKontakty() {
  return (
    <>
      <PageMeta title="Наши контакты" />
      <InnerPageHeader />
      <PageCover src="/images/our-contacts-cover.webp" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Контакты' }]} />
      <OurContacts />
      <Footer />
    </>
  );
}

import { HeatLab } from '@core/HeatLab';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function Avtoprokat() {
  return (
    <>
      <PageMeta title="Банный комплекс «Лаборатория тепла»" />
      <InnerPageHeader />
      <PageCover src="/images/baza/blagodat.jpg" />
      <Breadcrumb
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Экосистема Алтай', href: '/nasha-ekosistema' },
          { label: 'Молодость в Манжероке', href: '/manjerok' },
          { label: 'Банный комплекс' },
        ]}
      />
      <HeatLab />
      <Footer />
    </>
  );
}

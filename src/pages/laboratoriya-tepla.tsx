import { HeatLab } from '@core/HeatLab';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function Avtoprokat() {
  return (
    <>
      <PageMeta title="Банный комплекс «Лаборатория тепла»" />
      <InnerPageHeader />
      <PageCover src="/images/baza/blagodat.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Банный комплекс «Благодать»' }]} />
      <HeatLab />
      <Footer />
    </>
  );
}

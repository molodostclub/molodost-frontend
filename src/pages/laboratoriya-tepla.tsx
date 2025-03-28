import { HeatLab } from '@core/HeatLab';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function Avtoprokat() {
  return (
    <>
      <PageMeta title="Банный комплекс «Лаборатория тепла»" />
      <InnerPageHeader />
      <PageCover src="/images/baza/blagodat.jpg" />
      <HeatLab />
      <Footer />
    </>
  );
}

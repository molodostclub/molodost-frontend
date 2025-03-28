import { YouthIgnites } from '@core/YouthIgnites';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function MolodostZazhigayet() {
  return (
    <>
      <PageMeta title="Молодость зажигает" />
      <InnerPageHeader />
      <PageCover src="/images/molodost-zazhigaet.jpg" />
      <YouthIgnites />
      <Footer />
    </>
  );
}

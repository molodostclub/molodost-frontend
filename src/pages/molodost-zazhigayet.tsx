import { YouthIgnites } from '@core/YouthIgnites';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function MolodostZazhigayet() {
  return (
    <>
      <PageMeta title="Молодость зажигает" />
      <InnerPageHeader />
      <PageCover src="/images/home/molodost-zazhigaet.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Молодость зажигает' }]} />
      <YouthIgnites />
      <Footer />
    </>
  );
}

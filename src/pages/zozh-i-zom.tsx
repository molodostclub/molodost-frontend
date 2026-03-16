import { HealthLifestyle } from '@core/HealthLifestyle';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function ZoshIZom() {
  return (
    <>
      <PageMeta title="ЗОЖ и ЗОМ" />
      <InnerPageHeader />
      <PageCover src="/images/zozh-i-zom-cover.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'ЗОЖ и ЗОМ' }]} />
      <HealthLifestyle />
      <Footer />
    </>
  );
}

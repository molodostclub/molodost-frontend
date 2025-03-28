import { HealthLifestyle } from '@core/HealthLifestyle';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function ZoshIZom() {
  return (
    <>
      <PageMeta title="ЗОЖ и ЗОМ" />
      <InnerPageHeader />
      <PageCover src="/images/zozh-i-zom-cover.jpg" />
      <HealthLifestyle />
      <Footer />
    </>
  );
}

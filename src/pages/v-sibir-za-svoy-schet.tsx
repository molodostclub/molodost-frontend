import { PricesPage } from '@/core/PricesPage';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function VSibirZaSvoySchet() {
  return (
    <>
      <PageMeta title="В Сибирь за свой счет" />
      <InnerPageHeader />
      <PageCover src="/images/v-sibir-za-svoy-schet-cover.png" />
      <PricesPage />
      <Footer />
    </>
  );
}
import { PricesPageBaikal } from '@/core/PricesPageBaikal';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function PricesBaikal() {
  return (
    <>
      <PageMeta title="В Сибирь за свой счёт — Байкал" />
      <InnerPageHeader />
      <PageCover src="/images/baikal/main.png" />
      <Breadcrumb
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Молодость на Байкале', href: '/baikal' },
          { label: 'В Сибирь за свой счёт' },
        ]}
      />
      <PricesPageBaikal />
      <Footer variant="baikal" />
    </>
  );
}

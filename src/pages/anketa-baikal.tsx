import { AnketaPageBaikal } from '@/core/AnketaPage';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function AnketaBaikal() {
  return (
    <>
      <PageMeta title="Анкета Байкал" />
      <InnerPageHeader />
      <PageCover src="/images/anketa/large.jpeg" />
      <Breadcrumb
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Анкета Байкал' },
        ]}
      />
      <AnketaPageBaikal />
      <Footer variant="baikal" />
    </>
  );
}

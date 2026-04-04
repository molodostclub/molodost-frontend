import { AnketaThanks } from '@/core/AnketaThanks';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function AnketaThanksPage() {
  return (
    <>
      <PageMeta title="Спасибо!" />
      <InnerPageHeader />
      <PageCover src="/images/main-cover2.jpg" />
      <Breadcrumb
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Анкета', href: '/anketa' },
          { label: 'Спасибо!' },
        ]}
      />
      <AnketaThanks />
      <Footer />
    </>
  );
}

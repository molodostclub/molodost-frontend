import { FC } from 'react';
import { May } from '@/core/May';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { Adults } from '@/core/Adults';

export default function AdultsPage() {
  return (
    <>
      <PageMeta title="МОЛОДОСТЬ ПО-ВЗРОСЛОМУ" />
      <InnerPageHeader />
      <PageCover src="/images/adults/one.jpg" />
      <Adults />
      <Footer />
    </>
  );
}
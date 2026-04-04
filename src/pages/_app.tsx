import '@styles/normalize.css';
import '@styles/global.css';

import type { AppProps } from 'next/app';
import "../shared/types"
import { CookieConsent } from '@/shared/components/CookieConsent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

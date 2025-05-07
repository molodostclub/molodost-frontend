import '@styles/normalize.css';
import '@styles/global.css';

import type { AppProps } from 'next/app';
import "../shared/types"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

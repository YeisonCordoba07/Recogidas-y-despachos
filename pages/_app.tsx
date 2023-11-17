import { Layout } from '@/layouts';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {
  return (
  <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>

  );
}

export default App;

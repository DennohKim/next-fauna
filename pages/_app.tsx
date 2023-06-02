import Nav from '@/components/Nav';
import { client } from '@/gqlClient';
import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Nav />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

import "../styles/globals.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { Layout } from "../src/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;

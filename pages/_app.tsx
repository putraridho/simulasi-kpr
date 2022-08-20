import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import theme from "@/theme";
import store from "@/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Simulasi KPR Syariah / Suku Bunga Flat</title>
          <meta
            name="description"
            content="Kalkulator untuk menghitung perkiraan biaya yang dikeluarkan dalam KPR Syariah"
          />
          <meta name="keywords" content="KPR, KPR Syariah, Bunga Flat" />
          <meta name="author" content="@mrputraridho" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

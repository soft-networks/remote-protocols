import "../styles/globals.css";
import "../styles/tarotCard.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;

import "../styles/globals.css";
import "../styles/tarotCard.css";
import type { AppProps } from "next/app";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter  initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MyApp;

import Head from "next/head";
import Header from "./header";
import { m } from "framer-motion";
import { useRouter } from "next/router";
import BackgroundProvider from "./backgrounds";


const Layout: React.FC<{ pageName?: string }> = ({ children, pageName }) => {

  const router = useRouter();
  return (
    <main>
      <Head>
        <title>{pageName || "intimate protocols"} </title>
      </Head>

      <div className="stack stackSpacing:noGap fullBleed">
          <Header />
          <BackgroundProvider>
            {children}
          </BackgroundProvider>
      </div>
    </main>
  );
};

export default Layout;

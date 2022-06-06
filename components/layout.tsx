import Head from "next/head";
import { m } from "framer-motion";
import { useRouter } from "next/router";
import BackgroundProvider from "./BackgroundProvider";
import Header from "./header";


const Layout: React.FC<{ pageName?: string }> = ({ children, pageName }) => {

  const router = useRouter();
  return (
    <main>
      <Head>
        <title>{pageName || "intimate protocols"} </title>
      </Head>

      <div className="stack fullBleed">
          <Header />
          <BackgroundProvider>
            {children}
          </BackgroundProvider>
      </div>
    </main>
  );
};

export default Layout;

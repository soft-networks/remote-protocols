import Head from "next/head";
import Header from "./header";
import { m } from "framer-motion";
import { useRouter } from "next/router";


const Layout: React.FC<{ pageName?: string }> = ({ children, pageName }) => {

  const router = useRouter();
  return (
    <main>
      <Head>
        <title>{pageName || "intimate protocols"} </title>
      </Head>

      <div className="stack stackSpacing:noGap fullBleed">
        <Header />
        <m.div
          key={router.asPath}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "linear" , duration: 1}} // Set the transition to linear
        >
          {children}
        </m.div>
      </div>
    </main>
  );
};

export default Layout;

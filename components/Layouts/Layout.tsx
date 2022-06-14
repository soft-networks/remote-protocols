import Head from "next/head";
import { m } from "framer-motion";
import { useRouter } from "next/router";
import BackgroundProvider from "../BackgroundProvider";
import Header from "./header";
import React from "react";


const Layout: React.FC<{ pageName?: string }> = ({ children, pageName }) => {

  const router = useRouter();
  return (
    <main>
      <Head>
        <title>{pageName || "protocols for remote connection"} </title>
        <meta name="description" content="1:1 protocols for remote connection" />
        <meta name="theme-color" content="#10163b" />
        <meta name="author" content="Alice Yuang Zhang x soft networks" />
        <meta
          name="keywords"
          content="remote connection, long distance, intimacy, protocol, art, wizard, connectivity, 1:1, 1:_, protocols for remote connection, connecting with someone while afar, ideas for remote connectivity"
        />
      </Head>

      <div className="fullBleed stack:noGap">
        <Header />
        <BackgroundProvider>{children}</BackgroundProvider>
      </div>
    </main>
  );
};

export default Layout;

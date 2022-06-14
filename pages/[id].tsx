import type { NextPage } from "next";
import ProtocolPageInternal from "../components/PageInternal/Protocol";
import Layout from "../components/Layouts/Layout";

const ProtocolPage: NextPage = () => {
  return (
    <Layout>
      <ProtocolPageInternal />
    </Layout>
  );
};

export default ProtocolPage;

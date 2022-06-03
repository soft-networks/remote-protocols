import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProtocolPageInternal from "../components/protocolPage";
import Layout from "../components/layout";

const ExercisePage: NextPage = () => {
  return (
    <Layout>
      <ProtocolPageInternal />
    </Layout>
  );
};

export default ExercisePage;

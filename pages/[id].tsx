import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProtocolPageInternal from "../components/PageInternal/Protocol";
import Layout from "../components/Layouts/layout";

const ExercisePage: NextPage = () => {
  return (
    <Layout>
      <ProtocolPageInternal />
    </Layout>
  );
};

export default ExercisePage;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ExercisePageInternal from "../components/exercisePageInternal";
import Header from "../components/header";
import Layout from "../components/layout";

const ExercisePage: NextPage = () => {
  return (
    <Layout>
      <ExercisePageInternal />
    </Layout>
  );
};

export default ExercisePage;

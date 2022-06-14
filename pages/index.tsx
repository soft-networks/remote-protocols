import type { NextPage } from "next";
import bgRender from "../components/BackgroundProvider";
import Layout from "../components/Layouts/Layout";
import Oracle from "../components/PageInternal/Oracle";

const Home: NextPage = () => {
  return (
    <Layout>
        <Oracle />
    </Layout>
  );
};

export default Home;

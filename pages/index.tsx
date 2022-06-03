import type { NextPage } from "next";
import bgRender from "../components/BackgroundProvider";
import Layout from "../components/layout";
import Oracle from "../components/oracle";

const Home: NextPage = () => {
  return (
    <Layout>
        <Oracle />
    </Layout>
  );
};

export default Home;

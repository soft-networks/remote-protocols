import type { NextPage } from "next";
import Layout from "../components/layout";
import Oracle from "../components/oracle";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="fullBleed padded center">
        <Oracle />
      </div>
    </Layout>
  );
};

export default Home;

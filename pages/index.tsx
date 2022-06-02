import type { NextPage } from "next";
import bgRender from "../components/backgrounds";
import Layout from "../components/layout";
import Oracle from "../components/oracle";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="fullBleed padded center">
        <div className="fullBleed absolute center">{bgRender()}</div>
        <Oracle />
      </div>
    </Layout>
  );
};

export default Home;

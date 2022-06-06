import type { NextPage } from "next";
import { useEffect } from "react";
import { useSetBackgroundID } from "../components/BackgroundProvider";
import CardPreview from "../components/CardPreview";
import Layout from "../components/layout";
import { getAllExercises } from "../data/protocols";

const All: NextPage = () => {
  const setBGID = useSetBackgroundID();

  useEffect(() => {
    setBGID("dots");
  }, [setBGID]);

  return (
    <Layout pageName="all protocols">
      <div className="stack align:center">
        <div className="center-text wide">
          <p>
            {" "}
            scroll down to review all the protocols we have collected so far. to submit your own protocol,{" "}
            <a
              href="mailto:aliceyuanzhang@riseup.net ?cc=hello@softnet.works&subject=An%20idea%20for%20a%20remote%20connection%20protocol"
              target="_blank"
              rel="noreferrer"
            >
              send us an email.
            </a>
          </p>
        </div>
        <div className="centerh halfWidth grid padded">
          {getAllExercises().map((e, i) => (
            <CardPreview exercise={e} key={"card-" + e.name} i={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default All;

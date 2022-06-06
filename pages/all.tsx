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
      <div className="fullBleed center stack">
        <div className="wide center-text " style={{marginTop: "var(--s3)"}}>
          <p> scroll down to review all the protocols we have collected so far. to submit your own protocol, click here</p>
        </div>
        <div className="halfWidth fullHeight grid padded">
          {getAllExercises().map((e, i) => (
            <CardPreview exercise={e} key={"card-" + e.name} i={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default All;

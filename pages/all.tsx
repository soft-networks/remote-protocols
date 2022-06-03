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
  }, [setBGID])
  
  return (
    <Layout pageName="all protocols">
      <div className="fullBleed center">
        <div
          className="halfWidth fullHeight grid padded"
          style={{ "--stackSpacing": "var(--s2)" } as React.CSSProperties}
        >
          {getAllExercises().map((e, i) => (
            <CardPreview exercise={e} key={"card-" + e.name} i={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default All;

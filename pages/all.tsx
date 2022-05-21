import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import CardDetail from "../components/CardDetail";
import CardPreview from "../components/CardPreview";
import CardContent from "../components/CardContent";
import Header from "../components/header";
import Layout from "../components/layout";
import { getAllExercises } from "../lib/exercises";

const All: NextPage = () => {
  return (
    <Layout pageName="all protocols">
      <div className="fullBleed center">
        <div
          className="halfWidth fullHeight grid padded"
          style={{ "--stackSpacing": "var(--s2)" } as React.CSSProperties}
        >
          {getAllExercises().map((e) => (
            <CardPreview exercise={e} key={"card-" + e.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default All;

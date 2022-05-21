import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getRandomExercise } from "../lib/exercises";
import FadeInY from "./animations/FadeInY";
import CardDetail from "./CardDetail";
import CardContent from "./CardContent";

const Oracle: React.FC = () => {
  const [status, setStatus] = useState<"SUMMONING" | "SUMMONED" | "INITIAL">();
  const router = useRouter();

  const displayOracle = useMemo(() => {
    console.log("RUNNING ORACLE", status);
    switch (status) {
      case "SUMMONING":
        setTimeout(() => setStatus("SUMMONED"), Math.random() * 1000 + 1000);
        return (
          <div className="center-all">
            <div> summoning</div>
          </div>
        );
      case "SUMMONED":
        let exercise = getRandomExercise();
        router.push('/' + exercise.id, undefined, {shallow: true});
        return (
          <FadeInY>
            <CardDetail exercise={exercise} share />
          </FadeInY>
        );
      default:
      case "INITIAL":
        return (
          <div className="stack narrow whiteFill border padded">
            <div> Ask the oracle for an exercise </div>
            <span className="button border padded:s-1 button" onClick={() => setStatus("SUMMONING")}>
              get it
            </span>
          </div>
        );
    }
  }, [status, router]);

  return displayOracle;
};

export default Oracle;

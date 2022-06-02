import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getRandomExercise } from "../lib/exercises";
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
        router.push('/' + exercise.id);
      default:
      case "INITIAL":
        return (
          <div className="stack narrow grayFill center-text border padded:s2">
            <p>  ARE YOU LOOKING TO CONNECT WITH SOMEONE FROM AFAR? </p>
            <p>  THE LITTLE ORACLE PROVIDES PROTOCOLS TO HELP YOU COMMUNICATE WITH A REMOTE SUBJECT </p>
            <span className="button" onClick={() => setStatus("SUMMONING")}>
              get it
            </span>
          </div>
        );
    }
  }, [status, router]);

  return displayOracle;
};

export default Oracle;

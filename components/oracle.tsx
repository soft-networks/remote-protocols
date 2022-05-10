import { useCallback, useEffect, useMemo, useState } from "react";
import { getRandomExercise } from "../lib/exercises";
import ExerciseCard from "./exerciseCard";

const Oracle: React.FC = () => {
  const [status, setStatus] = useState<"SUMMONING" | "SUMMONED" | "INITIAL">();

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
        return  <ExerciseCard exercise={getRandomExercise()} share/>;
      default:
      case "INITIAL":
        return (
          <div className="stack narrow">
            <div> Ask the oracle for an exercise </div>
            <span className="button" onClick={() => setStatus("SUMMONING")}>
              get it
            </span>
          </div>
        );
    }
  }, [status]);

  return displayOracle;
};

export default Oracle;

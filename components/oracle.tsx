import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getRandomExercise } from "../data/protocols";
import { useSetBackgroundID } from "./BackgroundProvider";
import { OracleCompletedText, OraclePromptText, OracleUpdatingText } from "../data/prompts";
import { BG_TRANSITION_TIME, PER_ORACLE_TEXT_TIME } from "../data/times";
import { PromptDialog, UpdatingOracleText } from "./TextLayouts";


const Oracle: React.FC = () => {
  const [status, setStatus] = useState<"SUMMONED" | "INITIAL" | "COMPLETE">("INITIAL");
  const router = useRouter();

  const displayOracle = useCallback(() => {
    console.log("RUNNING ORACLE", status);
    switch (status) {
      case "SUMMONED":
        setStatus("COMPLETE");
        let exercise = getRandomExercise();
        router.push("/" + exercise.id);
        return <span> ... </span>;
      case "INITIAL":
        return <OracleAnimation onPromptComplete={() => setStatus("SUMMONED")} />
      default:
      case "COMPLETE":
        return null;
    }
  }, [status, router]);

  return displayOracle();
};


const OracleAnimation: React.FC<{onPromptComplete: () => void}> = ({onPromptComplete}) => {

  const [stage, setStage] = useState<number>(0);
  const setBGID = useSetBackgroundID();

  useEffect(() => {
  // console.log("stage changed", stage);
    switch (stage) {
      case 0:
        setBGID("home");
        break;
      case 0.5: 
        setBGID("stars");
        break;
      case 1: 
        setBGID("dots");
        break;
      case 2: 
        setBGID("galaxy0");
        setTimeout(() => setBGID("galaxy1"), PER_ORACLE_TEXT_TIME)
        setTimeout(() => setBGID("galaxy2"), 2 * PER_ORACLE_TEXT_TIME)
        break;
      case 3: 
        setBGID("dots");
        break;
      case 4: 
        onPromptComplete();
        break;
      default:
        setBGID("blank");
        break;
    }
  }, [stage, setBGID, onPromptComplete]);

  const displayText = useMemo((): JSX.Element | null => {
    switch (stage) {
      case 0: {
        return (
          <PromptDialog onPromptClicked={() => setStage(0.5)} promptText={"→"} textStrings={OraclePromptText[0]} />
        );
      }
      case 0.5: {
        return (
          <PromptDialog onPromptClicked={() => setStage(1)} promptText={"begin"} textStrings={OraclePromptText[1]} />
        );
      }
      case 1: 
        return <UpdatingOracleText onAnimationComplete={() => setStage(2)} textStrings={OracleUpdatingText} key="dots"/>
      case 2:
        return (
          <UpdatingOracleText
            onAnimationComplete={() => setStage(3)}
            textStrings={[[""]]}
            key="galaxy"
            timePerStage={3 * PER_ORACLE_TEXT_TIME}
          />
        );
      case 3: 
        return <UpdatingOracleText onAnimationComplete={() => setStage(4)} textStrings={OracleCompletedText} key="complete"/>
      default: 
        return null
    }
  }, [stage]);

  return displayText 
};



export default Oracle;

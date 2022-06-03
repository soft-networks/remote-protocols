import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getRandomExercise } from "../data/protocols";
import { useSetBackgroundID } from "./BackgroundProvider";
import { OracleCompletedText, OraclePromptText, OracleUpdatingText } from "../data/prompts";
import { BG_TRANSITION_TIME, PER_ORACLE_TEXT_TIME } from "../data/times";
import { textToP } from "../lib/textTransform";


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
        return <PromptDialog onPromptComplete={() => setStatus("SUMMONED")} />
      default:
      case "COMPLETE":
        return null;
    }
  }, [status, router]);

  return displayOracle();
};

const PromptDialog: React.FC<{onPromptComplete: () => void}> = ({onPromptComplete}) => {

  const [stage, setStage] = useState<number>(0);
  const setBGID = useSetBackgroundID();

  useEffect(() => {
  // console.log("stage changed", stage);
    switch (stage) {
      case 0:
        setBGID("home");
        break;
      case 1: 
        setBGID("dots");
        break;
      case 2: 
        setBGID("galaxy");
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
          <div className="stack narrow grayFill border padded:s2">
            {textToP(OraclePromptText)}
            <span className="button center" onClick={() => setStage(1)}>
              request a protocol
            </span>
          </div>
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
            timePerStage={BG_TRANSITION_TIME + 2 * PER_ORACLE_TEXT_TIME}
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


const UpdatingOracleText: React.FC<{
  textStrings: string[][];
  onAnimationComplete: () => void;
  timePerStage?: number;
}> = ({ textStrings, onAnimationComplete, timePerStage = PER_ORACLE_TEXT_TIME }) => {
  let [textStage, setTextStage] = useState<number>(0);
  let [activeText, setActiveText] = useState<string[]>([]);

  useEffect(() => {
    // console.log("text stage", textStage, textStrings);

    if (textStage >= textStrings.length) {
      onAnimationComplete();
      return;
    }

    setActiveText(textStrings[textStage]);
  }, [textStage, textStrings, onAnimationComplete]);

  useEffect(() => {
    let interval = setInterval(() => setTextStage((t) => t + 1), timePerStage);
    return () => clearInterval(interval);
  }, [timePerStage]);

  return textToP(activeText);
};


export default Oracle;

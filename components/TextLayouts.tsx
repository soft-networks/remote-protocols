import { useEffect, useState } from "react";
import { PER_ORACLE_TEXT_TIME } from "../data/times";
import { textToP } from "../lib/textTransform";


interface PromptDialogProps {
  textStrings: string[];
  onPromptClicked: () => void;
  promptText: string;
}
export const PromptDialog = ({
  textStrings,
  onPromptClicked,
  promptText,
}:  PromptDialogProps) => {
  return (
    <div className="stack grayFill border padded:s2 center-text">
      {textToP(textStrings)}
      <span className="button" onClick={onPromptClicked}>
        {promptText}
      </span>
    </div>
  );
};

export const ModalDialog = (props: PromptDialogProps) => {
  return (
    <div className="fullBleed">
      <PromptDialog {...props} />
    </div>
  )
}

export const UpdatingOracleText: React.FC<{
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

  return <div className="center-text">{textToP(activeText)}</div>;
};

import { useEffect, useState } from "react";
import { ReflectionText } from "../../data/prompts";
import { postRating } from "../../data/server";
import { textToP } from "../../lib/textTransform";
import { ratingRenderer } from "../PageInternal/TextLayouts";


interface CardReflectionProps { 
  exercise: Exercise;
  onComplete: () => void
}
 

const CardReflection : React.FC<CardReflectionProps> = ({ exercise, onComplete}) => {

  const [numIntimacy, setNumIntimacy] = useState<number>(1);
  const [numEffort, setNumEffort] = useState<number>(1);

  return (
    <div className="fullBleed center:absolute cover  higher">
        <div className="halfWidth border centerh centerv stack grayFill padded:s1">
        {textToP(ReflectionText)}
        <div>
          <label> Effort: {numEffort} </label>
          <div className="horizontal-stack">
              <div className="button" onClick={() => setNumEffort(Math.max(numEffort - 1, 0))}> - </div>
              <div style={{minWidth: "10ch"}} className="center-text"> {ratingRenderer("@", numEffort)} </div>
              <div className="button" onClick={() => setNumEffort(Math.min(numEffort + 1, 5))}> + </div>
          </div>
        </div>
        <div>
          <label> Intimacy: {numIntimacy} </label>
          <div className="horizontal-stack">
              <div className="button" onClick={() => setNumIntimacy(Math.max(numIntimacy - 1, 0))}> - </div>
              <div style={{minWidth: "10ch"}} className="center-text">   {ratingRenderer("#", numIntimacy)} </div>
              <div className="button" onClick={() => setNumIntimacy(Math.min(numIntimacy + 1, 5))}> +  </div>
          </div>
        </div>
        <div className="horizontal-stack">
          <div className="button" onClick={() => onComplete()}>close</div>
          <div className="button" onClick={() => postRating(exercise.id, numEffort, numIntimacy, onComplete)}>submit</div>
        </div>
        </div>

    
    </div>

  )
}

export default CardReflection;

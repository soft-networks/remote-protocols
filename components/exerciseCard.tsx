import classNames from "classnames";
import { useState } from "react";

interface exerciseProps {
  exercise: Exercise;
  share?: boolean;
}



const ExerciseCard: React.FunctionComponent<exerciseProps> = ({ exercise, share }) => {

  const [flipCard, setflipCard] = useState(false);
  
  return (
    <div className="tarotCard" onClick={ e => setflipCard(!flipCard)}>
    <div className={classNames('contentContainer padded stack border front', { rotate: flipCard})}>
        <div className="caption"> {exercise.name} </div>
        <div className="flex-1"> {exercise.text} </div>
        <div className="align-end horizontal-stack fullWidth">
          <span> {ratingRenderer("🌸", exercise.rating.intimacy)} </span>
          <span> {ratingRenderer("🕑", exercise.rating.effort)} </span>
        </div>
      </div>
      <div className={classNames('contentContainer padded stack border back',  { rotate: flipCard})}>
        <div> card back</div>
      </div>
      
      {share && shareButton(exercise)}
    </div>
  );
};

const ratingRenderer = (symbol: string, n: number) => {
  let stars = [];
  for (let i = 0; i < n; i++) {
    stars.push(symbol);
  }
  return stars;
};

const shareButton = (exercise: Exercise) => {
  return (
    <div className="button" onClick={(e) => alert(window.location.host + "/" + exercise.name)}>
      share
    </div>
  );
};

export default ExerciseCard;

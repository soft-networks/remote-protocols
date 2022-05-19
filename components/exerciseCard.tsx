import {  useState } from "react";
import { suitImages } from "../lib/exercises";
import FlippingCard from "./animations/FlippingCard";

interface exerciseProps {
  exercise: Exercise;
  share?: boolean;
}

const ExerciseCard: React.FunctionComponent<exerciseProps> = ({ exercise, share }) => {
  const [flipCard, setflipCard] = useState(0);
  return (
    <div className="tarotCard" onClick={(e) => setflipCard( flipCard == 0 ? 1 : 0)} >
      <FlippingCard  flipCard={flipCard}>
        <CardBack exercise={exercise} />
      </FlippingCard>
      <FlippingCard hiddenSide flipCard={flipCard}>
        <CardFront exercise={exercise} />
      </FlippingCard>
      {share && shareButton(exercise)}
    </div>
  );
};



const CardFront : React.FC<{exercise: Exercise}> = ({ exercise }) => {
  const ratingRenderer = (symbol: string, n: number) => {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(symbol);
    }
    return stars;
  };
  return (
    <div className="fullBleed padded stack whiteFill">
      <div className="caption"> {exercise.name} </div>
      <div className="flex-1"> {exercise.text} </div>
      <div className="align-end horizontal-stack fullWidth">
        <span> {ratingRenderer("🌸", exercise.rating.intimacy)} </span>
        <span> {ratingRenderer("🕑", exercise.rating.effort)} </span>
      </div>
    </div>
  )
};

const CardBack : React.FC<{exercise: Exercise}> = ({ exercise }) => {
 return (
  <div className="fullBleed coverBG" style={{ backgroundImage: `url(${suitImages[exercise.suit]})` }}>
  </div>
 )
}

const shareButton = (exercise: Exercise) => {
  return (
    <div className="button" onClick={(e) => alert(window.location.host + "/" + exercise.name)}>
      share
    </div>
  );
};

export default ExerciseCard;

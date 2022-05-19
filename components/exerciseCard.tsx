import classNames from "classnames";
import { useState } from "react";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { suitImages } from "../lib/exercises";

interface exerciseProps {
  exercise: Exercise;
  share?: boolean;
}

const ExerciseCard: React.FunctionComponent<exerciseProps> = ({ exercise, share }) => {
  const [flipCard, setflipCard] = useState(0);
  return (
    <motion.div className="tarotCard" onClick={(e) => setflipCard(1)} >
      <FlippingCard  flipCard={flipCard}>
        <CardBack exercise={exercise} />
      </FlippingCard>
      <FlippingCard hiddenSide flipCard={flipCard}>
        <CardFront exercise={exercise} />
      </FlippingCard>
      {share && shareButton(exercise)}
    </motion.div>
  );
};



const FlippingCard : React.FC<{hiddenSide?: boolean, flipCard: number}> = ({ children, hiddenSide, flipCard}) => {
  const initAngle = hiddenSide ? 180 : 0;

  const x = useMotionValue(0.5)
  const xTransform = useTransform(x, [0, 1], [- 25, 25])

  const y = useMotionValue(0.5)
  const yTransform = useTransform(y, [0, 1], [initAngle - 15, initAngle + 15])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    let mxi = (event.clientX - rect.left) / rect.width;
    let myi  = (event.clientY - rect.top) / rect.height;

    x.set(myi);
    y.set(mxi);
  }
  return  (
    <motion.div 
    className={"contentContainer border"}
    transition={{ ease: "linear" }}
    onMouseMove={handleMouseMove}
    style={{ rotateX: xTransform, rotateY: yTransform }}
    > 
      {children}
    </motion.div>
  )
}


const CardFront : React.FC<{exercise: Exercise}> = ({ exercise }) => {
  const ratingRenderer = (symbol: string, n: number) => {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(symbol);
    }
    return stars;
  };
  return (
    <div className="fullBleed padded stack">
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

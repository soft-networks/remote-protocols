import classNames from "classnames";
import { useState } from "react";

import { motion } from "framer-motion";

interface exerciseProps {
  exercise: Exercise;
  share?: boolean;
}

const ExerciseCard: React.FunctionComponent<exerciseProps> = ({ exercise, share }) => {
  const [flipCard, setflipCard] = useState(false);

  return (
    <motion.div className="tarotCard" onClick={(e) => setflipCard(!flipCard)}>
      <motion.div
        className={"contentContainer padded stack border back"}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: 360 }}
        transition={{ ease: "linear" }}
      >
        <div> card back</div>
      </motion.div>
      <motion.div
        className={"contentContainer padded stack border front"}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 180 }}
        transition={{ ease: "linear" }}
      >
        <div className="caption"> {exercise.name} </div>
        <div className="flex-1"> {exercise.text} </div>
        <div className="align-end horizontal-stack fullWidth">
          <span> {ratingRenderer("🌸", exercise.rating.intimacy)} </span>
          <span> {ratingRenderer("🕑", exercise.rating.effort)} </span>
        </div>
      </motion.div>

      {share && shareButton(exercise)}
    </motion.div>
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

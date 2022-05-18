import classNames from "classnames";
import { useState } from "react";
import { useSpring, animated, config } from 'react-spring'


interface exerciseProps {
  exercise: Exercise;
  share?: boolean;
}



const ExerciseCard: React.FunctionComponent<exerciseProps> = ({ exercise, share }) => {

  const [flipCard, setflipCard] = useState(false);

  const cardSpringProps = {config:  {mass: 0.1, tension: 200, friction: 5}};
  const mainProps = useSpring({ to: {opacity: 1}, from: {opacity: 0}})
  const rotateProps = useSpring({to: { transform: 'rotateY(180deg) scale(1.1)'} , from: { transform: 'rotateY(360deg)'}, ...cardSpringProps})
  const rotatePropsReverse = useSpring({to: { transform: 'rotateY(0deg) scale(1.1)'} , from: { transform: 'rotateY(180deg)'}, ...cardSpringProps})
  
  return (
    <animated.div className="tarotCard" onClick={ e => setflipCard(!flipCard)} >
      <animated.div className={'contentContainer padded stack border front'}  style={flipCard ? rotateProps : {}}>
          <div className="caption"> {exercise.name} </div>
          <div className="flex-1"> {exercise.text} </div>
          <div className="align-end horizontal-stack fullWidth">
            <span> {ratingRenderer("🌸", exercise.rating.intimacy)} </span>
            <span> {ratingRenderer("🕑", exercise.rating.effort)} </span>
          </div>
        </animated.div>
      <animated.div className={'contentContainer padded stack border back'} style={flipCard ? rotatePropsReverse : {}}>
        <div> card back</div>
      </animated.div>
      {share && shareButton(exercise)}
    </animated.div>
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

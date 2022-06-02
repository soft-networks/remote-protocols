import { suitImages } from "../lib/exercises";

type CardSideInternal = exerciseProps & { onCardClick?: () => void; preview?: boolean };
type CardContentInternal = CardSideInternal & { flipCard: number };

const CardContent: React.FunctionComponent<CardContentInternal> = (props) => {
  return (
    <div>
      {!props.flipCard ? <CardBack {...props} /> : ""}
      {props.flipCard ? <CardFront {...props} /> : ""}
    </div>
  );
};

const CardFront: React.FC<CardSideInternal> = ({ exercise, onCardClick, preview }) => {
  const ratingRenderer = (symbol: string, n: number) => {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(symbol);
    }
    return stars;
  };
  return (
    <div className="stack">
      <div className="tarotCard padded stack lightFill" onClick={onCardClick}>
        <div className="caption"> {exercise.name} </div>
        <div className="flex-1"> {exercise.text} </div>
        <div className="align-end horizontal-stack fullWidth">
          <span> {ratingRenderer("#", exercise.rating.intimacy)} </span>
          <span> {ratingRenderer("@", exercise.rating.effort)} </span>
        </div>
      </div>
      {!preview ? <div className="horizontal-stack">{shareButton(exercise)}</div> : null}
    </div>
  );
};

const CardBack: React.FC<CardSideInternal> = ({ exercise, onCardClick, preview }) => {
  return (
    <div>
      {!preview ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            width: "min(45ch, 100%)",
            transform: "translate(-50%, calc(-100% - var(--s2))",
          }}
          className="center-text stack"
        >
          <p>HERE IS A PROTOCOL TO CONNECT REMOTELY. </p>
          <p> BOTH OF YOU PERFORM ITS STEPS TO CONNECT WITH EACH OTHER.</p>
        </div>
      ) : null}
      <div className="stack relative">
        <div
          className="tarotCard coverBG"
          style={{ backgroundImage: `url(${suitImages[exercise.suit]})` }}
          onClick={onCardClick}
        ></div>
        {!preview ? (
          <div className="horizontal-stack">
            <div className="button" onClick={onCardClick}>
              flip
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const shareButton = (exercise: Exercise) => {
  return (
    <div className="button" onClick={(e) => alert(window.location.host + "/" + exercise.id)}>
      share
    </div>
  );
};

export default CardContent;

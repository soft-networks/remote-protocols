import suitMapping from "../data/suitIllustrations";
import { AsciiRender } from "../lib/textTransform";

type CardSideInternal = exerciseProps & { onCardClick?: () => void; preview?: boolean };
type CardContentInternal = CardSideInternal & { flipCard: number };

const CardContent: React.FunctionComponent<CardContentInternal> = (props) => {
  return (
    <div className={props.exercise.suit}>
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
        <div> {exercise.name} </div>
        <div className="flex-1"> {exercise.text} </div>
        <div className="align-end horizontal-stack fullWidth">
          <span> {ratingRenderer("#", exercise.rating.intimacy)} </span>
          <span> {ratingRenderer("@", exercise.rating.effort)} </span>
        </div>
      </div>
      {!preview ? (
        <div className="horizontal-stack">
          <div className="button" onClick={onCardClick}>
            ?
          </div>
      
          {shareButton(exercise)}
          <div className="button" onClick={() => alert("todo")}>
            reflect
          </div>
        </div>
      ) : null}
    </div>
  );
};

const CardBack: React.FC<CardSideInternal> = ({ exercise, onCardClick, preview }) => {
  return (
    <div>
      {!preview ? (
        <div
          className="center-text stack floatingText"
        >
          <p>here is a protocol to connect remotely. both of you perform its steps to connect with each other.</p>
        </div>
      ) : null}
      <div className="stack relative">
        <div
          className={"tarotCard blackFill center-text border back"}
          onClick={onCardClick}
        >
          <AsciiRender text={suitMapping[exercise.suit]} />
        </div>
        {!preview ? (
          <div className="horizontal-stack">
            <div className="button" onClick={onCardClick}>
              SEE PROTOCOL
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

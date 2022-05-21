import { suitImages } from "../lib/exercises";
import FlippingCard from "./animations/FlippingCard";

type CardContentInternal = exerciseProps & { flipCard: number; onCardClick?: () => void };

const CardContent: React.FunctionComponent<CardContentInternal> = ({ exercise, share, flipCard, onCardClick }) => {
  return (
    <div className="stack stackSpacing:s1">
      <div
        className="tarotCard"
        onClick={() => {
          if (onCardClick) onCardClick();
        }}
      >
        <FlippingCard flipCard={flipCard}>
          <CardBack exercise={exercise} />
        </FlippingCard>
        <FlippingCard hiddenSide flipCard={flipCard}>
          <CardFront exercise={exercise} />
        </FlippingCard>
      </div>
      {share && (
        <div className="horizontal-stack">
          <span className="button lightFill border padded:s-1"> {shareButton(exercise)}</span>
        </div>
      )}
    </div>
  );
};

const CardFront: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
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
  );
};

const CardBack: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  return <div className="fullBleed coverBG" style={{ backgroundImage: `url(${suitImages[exercise.suit]})` }}></div>;
};

const shareButton = (exercise: Exercise) => {
  return (
    <div className="button" onClick={(e) => alert(window.location.host + "/" + exercise.id)}>
      share
    </div>
  );
};

export default CardContent;

import React from "react";
import { CardIntroText } from "../data/prompts";
import suitMapping from "../data/suitIllustrations";
import { AsciiRender, textToP } from "../lib/textTransform";

type CardSideInternal = exerciseProps & { onCardClick?: () => void; preview?: boolean };
type CardContentInternal = CardSideInternal & { flipCard: number };

const CardContent: React.FunctionComponent<CardContentInternal> = (props) => {
  return (
    <div className={props.exercise.suit}>
      {!props.flipCard ? (
        <CardWrapper {...props}>
          <CardBack {...props} />
        </CardWrapper>
      ) : (
        ""
      )}
      {props.flipCard ? (
        <CardWrapper {...props}>
          <CardFront {...props} />
        </CardWrapper>
      ) : (
        ""
      )}
    </div>
  );
};

const CardWrapper: React.FC<CardSideInternal> = ({ preview, children }) => {
  return (
    <div className="stack:s1 center:justify tarotCardContainer">
      {!preview ? (
        <div className="center-text">
          <p>{CardIntroText}</p>
        </div>
      ) : null}
      {children}
    </div>
  );
};

const CardActionWrapper: React.FC = ({ children }) => {
  return <div className="stack:s-1 center-text">{children}</div>;
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
    <>
      <div className="tarotCard padded stack lightFill" onClick={onCardClick}>
        <div> {exercise.name} </div>
        <div className="flex-1"> {textToP(exercise.text.split("\n"))} </div>
        <div className="align-end horizontal-stack fullWidth">
          <span> {ratingRenderer("#", exercise.rating.intimacy)} </span>
          <span> {ratingRenderer("@", exercise.rating.effort)} </span>
        </div>
      </div>
      {!preview ? (
        <CardActionWrapper>
          <p>
            <span className="button" onClick={(e) => alert(window.location.host + "/" + exercise.id)}>
              share
            </span>{" "}
            this card with your peer
          </p>
          <p>
            <span className="button" onClick={() => alert("todo")}>
              reflect
            </span>{" "}
            on this protocol afterwards to note level of intimacy and effort
          </p>
        </CardActionWrapper>
      ) : null}
    </>
  );
};

const CardBack: React.FC<CardSideInternal> = ({ exercise, onCardClick, preview }) => {
  return (
    <>
      <div className={"tarotCard blackFill center-text border back"} onClick={onCardClick}>
        <AsciiRender text={suitMapping[exercise.suit]} />
      </div>
      {!preview ? (
        <CardActionWrapper>
          <div>
            <span className="button" onClick={onCardClick}>
              FLIP THE CARD
            </span>{" "}
            to reveal
          </div>
        </CardActionWrapper>
      ) : null}
    </>
  );
};

export default CardContent;

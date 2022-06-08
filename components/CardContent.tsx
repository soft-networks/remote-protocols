import React, { useEffect, useState } from "react";
import { CardIntroText } from "../data/prompts";
import suitMapping from "../data/suitIllustrations";
import { AsciiRender, textToP } from "../lib/textTransform";
import copy from "copy-to-clipboard"

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
      {children}
    </div>
  );
};

const CardActionWrapper: React.FC = ({ children }) => {
  return <div className="stack:s-1 center-text containHeight">{children}</div>;
};

const CardFront: React.FC<CardSideInternal> = ({ exercise, onCardClick, preview }) => {
  const ratingRenderer = (symbol: string, n: number) => {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(symbol);
    }
    return stars;
  };
  const [wasCopied, setWasCopied] = useState(false);

  useEffect(() => {
    if (wasCopied) {
      setTimeout(() => setWasCopied(false), 2000);
    }
  }, [wasCopied])
  return (
    <>
      <div className="tarotCard padded stack:s2 lightFill centerh" onClick={onCardClick}>
        <div> Protocol #{exercise.index} </div>
        <div className="flex-1 stack:s-1">
          <div className="uppercase"> {exercise.name} </div> 
          <div>{textToP(exercise.text.split("\n"))}</div>
        </div>
        <div className="align-end horizontal-stack fullWidth">
          <span> {ratingRenderer("#", exercise.rating.intimacy)} </span>
          <span> {ratingRenderer("@", exercise.rating.effort)} </span>
        </div>
      </div>
      {!preview ? (
        <CardActionWrapper>
          {!wasCopied ? (
            <p>
              {" "}
              <span
                className="button"
                onClick={(e) => copy(window.location.host + "/" + exercise.id) && setWasCopied(true)}
              >
                share
              </span>{" "}
              this card with your peer{" "}
            </p>
          ) : (
            <p> link to the card was copied to your clipboard! </p>
          )}
          <p>
            <span className="button" onClick={() => alert("todo")}>
              reflect
            </span>{" "}
            on this protocol afterwards to note level of intimacy (#) and effort (@)
          </p>
        </CardActionWrapper>
      ) : null}
    </>
  );
};

const CardBack: React.FC<CardSideInternal> = ({ exercise, onCardClick, preview }) => {
  return (
    <>
      <div className={"tarotCard blackFill center-text border back centerh"} onClick={onCardClick}>
        <AsciiRender text={suitMapping[exercise.suit]} />
      </div>
      {!preview ? (
        <CardActionWrapper>
          <div>
            <span className="button" onClick={onCardClick}>
              FLIP CARD
            </span>{" "}
            to reveal
          </div>
        </CardActionWrapper>
      ) : null}
    </>
  );
};

export default CardContent;

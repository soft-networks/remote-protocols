import { useState } from "react";
import CardContent from "./CardContent";

const CardDetail: React.FunctionComponent<exerciseProps> = (props) => {
  const [flipCard, setflipCard] = useState(0);
  return (
    <div className="flipHover cover">
      <div className="centerv centerh">
        <CardContent {...props} flipCard={flipCard} onCardClick={() => setflipCard(flipCard == 0 ? 1 : 0)}/>
      </div>
    </div>
  );
};

export default CardDetail;
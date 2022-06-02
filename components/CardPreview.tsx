import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CardContent from "./CardContent";


const CardPreview : React.FC<exerciseProps & {i?: number}> = ( props) => {

  const router = useRouter();

  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    setTimeout(() => setDelayPassed(true), 500 * ( (props.i || 0) + 1));
  }, [setDelayPassed, props.i])

  return (
    <VisibilitySensor active={delayPassed}>
      {({isVisible}) =>
        <div className="clickHover">
        <CardContent {...props} flipCard={isVisible ? 1 : 0}  onCardClick={() => router.push("/" + props.exercise.id)} preview={true}/>
        </div>
      }
    </VisibilitySensor>
  )
}

export default CardPreview;
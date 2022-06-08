import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CardContent from "./CardContent";


const CardPreview : React.FC<exerciseProps & {i?: number}> = ( props) => {

  const router = useRouter();
  const myRef = useRef<HTMLDivElement>(null);

  const [delayPassed, setDelayPassed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setDelayPassed(true), 300 * ( (props.i || 0) + 1));
    return () => clearTimeout(timeout);
  }, [setDelayPassed, props.i])

  return (
    <VisibilitySensor
      active={delayPassed}
      onChange={(becameVisible) => {
        if (becameVisible && !isVisible) setIsVisible(true);
      }}
    >
      <div className="clickHover" ref={myRef}>
        <CardContent
          {...props}
          flipCard={isVisible ? 1 : 0}
          onCardClick={() => router.push("/" + props.exercise.id)}
          preview={true}
        />
      </div>
    </VisibilitySensor>
  );
}

export default CardPreview;
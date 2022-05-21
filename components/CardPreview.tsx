import { useRouter } from "next/router";
import VisibilitySensor from "react-visibility-sensor";
import CardContent from "./CardContent";


const CardPreview : React.FC<exerciseProps> = ( props) => {

  const router = useRouter();

  return (
    <VisibilitySensor>
      {({isVisible}) =>
        <div className="clickHover">
        <CardContent {...props} flipCard={isVisible ? 1 : 0}  onCardClick={() => router.push("/" + props.exercise.id)} />
        </div>
      }
    </VisibilitySensor>
  )
}

export default CardPreview;
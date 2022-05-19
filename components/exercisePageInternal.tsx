import { useRouter } from "next/router";
import { getExerciseByID } from "../lib/exercises";
import FadeInY from "./animations/FadeInY";
import ExerciseCard from "./exerciseCard";

const ExercisePageInternal: React.FC = () => {
  const { query, isReady } = useRouter()
  
  const eid = query.id as string
  const exercise = getExerciseByID(eid as string);
  return (
    <div className="center fullBleed">
      {!isReady ? (
        <div>Loading</div>
      ) : exercise ? (
        <FadeInY>
          <ExerciseCard exercise={exercise} />
        </FadeInY>
      ) : (
        <div> Exercise not found </div>
      )}
    </div>
  );
};

export default ExercisePageInternal;

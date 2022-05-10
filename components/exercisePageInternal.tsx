import { useRouter } from "next/router";
import { getExerciseByID } from "../lib/exercises";
import ExerciseCard from "./exerciseCard";

const ExercisePageInternal: React.FC = () => {
  const { query, isReady } = useRouter()

  if (!isReady) {
    return <div> Loading</div>
  }
  
  const eid = query.id as string
  const exercise = getExerciseByID(eid as string);
  return exercise ? <ExerciseCard exercise={exercise} share/> : <div>No exercise found</div>;
};

export default ExercisePageInternal;

import { useRouter } from "next/router";
import { getExerciseByID } from "../../data/protocols";
import CardDetail from "../Card/CardDetail";

const ProtocolPageInternal: React.FC = () => {
  const { query, isReady } = useRouter()
  
  const eid = query.id as string
  const exercise = getExerciseByID(eid as string);
  return (
    <div className="center fullBleed">
      {!isReady ? (
        <div>Loading</div>
      ) : exercise ? (
          <CardDetail exercise={exercise} />
      ) : (
        <div> Exercise not found </div>
      )}
    </div>
  );
};

export default ProtocolPageInternal;

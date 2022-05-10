interface exerciseProps {
  exercise: Exercise;
  share?: boolean;
}
const ExerciseCard: React.FunctionComponent<exerciseProps> = ({ exercise, share }) => {
  return (
    <div className="padded border stack narrow">
      <div className="caption"> {exercise.name} </div>
      <div className="flex-1"> {exercise.text} </div>
      <div className="align-end horizontal-stack fullWidth">
        <span> {ratingRenderer("🌸", exercise.rating.intimacy)} </span>
        <span> {ratingRenderer("🕑", exercise.rating.effort)} </span>
      </div>
      {share && shareButton(exercise)}
    </div>
  );
};

const ratingRenderer = (symbol: string, n: number) => {
  let stars = [];
  for (let i = 0; i < n; i++) {
    stars.push(symbol);
  }
  return stars;
};

const shareButton = (exercise: Exercise) => {
  return (
    <div className="button" onClick={(e) => alert(window.location.host + "/" + exercise.name)}>
      share
    </div>
  );
};

export default ExerciseCard;

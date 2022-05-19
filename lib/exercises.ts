

export const suitImages : Record<Suit, string> = {
 "A": "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
 "B": "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
 "C": "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
 "D": "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
}
const exercises: Exercise[] = [
  {
    name: "towards",
    text: "Walk 10 feet in the direct of the person, and send a photo",
    rating: { intimacy: 2, effort: 4 },
    suit: "A",
  },
  { name: "heartbeat", text: "Send a heartbeet", rating: { intimacy: 5, effort: 2 } , suit: "B"},
  { name: "playlists", text: "5 songs that you are thinking of", rating: { intimacy: 5, effort: 2 } , suit: "C"},
];


export const getAllExercises = () => {
  return exercises;
}

export const getRandomExercise = () => {
  return exercises[Math.floor(Math.random() * exercises.length)];
}


export const getExerciseByID = (id: string) => {
  console.log("Searching for" , id);
  return exercises.find(exercise => exercise.name == id);
}

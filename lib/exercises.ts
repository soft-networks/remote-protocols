const exercises : Exercise[] = [ 
  { name: 'towards', text: 'Walk 10 feet in the direct of the person, and send a photo', rating: {intimacy: 2, effort: 4} },
  { name: 'heartbeat', text: 'Send a heartbeet', rating: {intimacy: 5, effort: 2} },
  { name: 'playlists', text: '5 songs that you are thinking of', rating: {intimacy: 5, effort: 2} }
]


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

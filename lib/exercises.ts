import slugify from "slugify";

export const suitImages: Record<Suit, string> = {
  A: "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
  B: "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
  C: "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
  D: "https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg",
};
const exercises: Exercise[] = [
  {
    text: "Share some songs you're listening to today",
    name: "Playlist",
    id: "playlist",
    suit: "A",
    rating: { intimacy: 3, effort: 2 },
  },
  {
    text: "Do an audio recording of a body scan",
    name: "Body listening",
    id: "body-listening",
    suit: "A",
    rating: { intimacy: 3, effort: 5 },
  },
  { text: "I saw this and thought of you", name: "Totem", id: "totem", suit: "A", rating: { intimacy: 4, effort: 1 } },
  {
    text: "Observe the outside together on a phone call",
    name: "Soundscapes",
    id: "soundscapes",
    suit: "B",
    rating: { intimacy: 4, effort: 5 },
  },
  {
    text: "Leave voice messages in different digital spaces - scavenger hunt",
    name: "Voice eggs",
    id: "voice-eggs",
    suit: "C",
    rating: { intimacy: 4, effort: 4 },
  },
  {
    text: "Setup an video call, and then continue do whatever you were doing",
    name: "Ambient video",
    id: "ambient-video",
    suit: "A",
    rating: { intimacy: 4, effort: 5 },
  },
  {
    text: "Visit my friends for me",
    name: "Hello friends",
    id: "hello-friends",
    suit: "A",
    rating: { intimacy: 5, effort: 5 },
  },
  {
    text: "Work on a project together",
    name: "Collaborate",
    id: "collaborate",
    suit: "A",
    rating: { intimacy: 5, effort: 5 },
  },
  {
    text: "Spend an hour cowriting in response to 5 questions you have for each other",
    name: "Prompts",
    id: "prompts",
    suit: "A",
    rating: { intimacy: 3, effort: 5 },
  },
  {
    text: "Draw the network diagram between us",
    name: "Relational network",
    id: "relational-network",
    suit: "A",
    rating: { intimacy: 3, effort: 5 },
  },
  {
    text: "Ping each other whenever we are feeling a heightened emotion (once or multiple times or none)",
    name: "Check in",
    id: "check-in",
    suit: "A",
    rating: { intimacy: 3, effort: 3 },
  },
  {
    text: "Share hype images with each other until the most hype image is found",
    name: "News feed",
    id: "news-feed",
    suit: "A",
    rating: { intimacy: 2, effort: 4 },
  },
  {
    text: "Find something that reminds you of me and use it as a transmitter to speak to me",
    name: "Thread between us",
    id: "thread-between-us",
    suit: "A",
    rating: { intimacy: 5, effort: 1 },
  },
  {
    text: "Make a quick pose with your body, draw it, mail it",
    name: "Tangible poses",
    id: "tangible-poses",
    suit: "A",
    rating: { intimacy: 5, effort: 5 },
  },
  {
    text: "Calculate angle between (your?) city and mine and walk 10m in that direction using your phone's compass. Send that location from Maps. ",
    name: "Towards you",
    id: "towards-you",
    suit: "A",
    rating: { intimacy: 5, effort: 4 },
  },
  {
    text: "Make me an e-card to say good morning",
    name: "Morning",
    id: "Morning",
    suit: "A",
    rating: { intimacy: 3, effort: 4 },
  },
  {
    text: "Send me a photo, marked up with the sounds you can hear",
    name: "Sounds around",
    id: "sounds-around",
    suit: "A",
    rating: { intimacy: 4, effort: 4 },
  },
  {
    text: "Share the first link you look at today",
    name: "Tweet",
    id: "tweet",
    suit: "A",
    rating: { intimacy: 2, effort: 1 },
  },
];

export const getAllExercises = () => {
  return exercises;
};

export const getRandomExercise = () => {
  return exercises[Math.floor(Math.random() * exercises.length)];
};

export const getExerciseByID = (id: string) => {
  console.log("Searching for", id);
  return exercises.find((exercise) => exercise.id == id);
};

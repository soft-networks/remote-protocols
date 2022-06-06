const exercises: Exercise[] = [
  {
    text: "Share 3-5 songs that you are listening to today.",
    name: "Playlist",
    id: "playlist",
    suit: "chime",
    rating: { intimacy: 3, effort: 2 },
  },
  {
    text: "I. Find a device that records sound \nII. Move the device along your body from head to toe\nIII. Let each body part 'speak for itself' along the way\nIV. Send the recordings to each other ",
    name: "Body listening",
    id: "body-listening",
    suit: "astral",
    rating: { intimacy: 3, effort: 5 },
  },
  {
    text: "I. As you go about your day, notice if something that reminds you of your peer\nII. Make and share a record of it",
    name: "Totem",
    id: "totem",
    suit: "astral",
    rating: { intimacy: 4, effort: 1 },
  },
  {
    text: "I. Get on a voice call and go outside together.\nII. Narrate your surroundings out loud. It's okay if your voices overlap or cut into each other.\nIII. Notice how your attention shifts between the two places.",
    name: "Soundscapes",
    id: "soundscapes",
    suit: "weave",
    rating: { intimacy: 4, effort: 5 },
  },
  {
    text: "Leave each other a few voice messages across the different digital channels where you are both connected.",
    name: "Voice eggs",
    id: "voice-eggs",
    suit: "chime",
    rating: { intimacy: 4, effort: 4 },
  },
  {
    text: "Set up an video call and then continue do whatever you were doing (no need to acknowledge each other).",
    name: "Ambient video",
    id: "ambient-video",
    suit: "flow",
    rating: { intimacy: 4, effort: 5 },
  },
  {
    text: "Check in on each other's friends",
    name: "Hello friends",
    id: "hello-friends",
    suit: "weave",
    rating: { intimacy: 5, effort: 5 },
  },
  {
    text: "Work on a project together",
    name: "Collaborate",
    id: "collaborate",
    suit: "weave",
    rating: { intimacy: 5, effort: 5 },
  },
  {
    text: "I. Come up with a few questions\nII. Discuss by co-writing on an Etherpad (or equivalent)",
    name: "Prompts",
    id: "prompts",
    suit: "flow",
    rating: { intimacy: 3, effort: 5 },
  },
  {
    text: "Draw the network diagram between you two.",
    name: "Relational network",
    id: "relational-network",
    suit: "weave",
    rating: { intimacy: 3, effort: 5 },
  },
  {
    text: "Send a notification every time you are experiencing a heightened emotion today.",
    name: "Check in ",
    id: "check-in",
    suit: "chime",
    rating: { intimacy: 3, effort: 3 },
  },
  {
    text: "Share increasingly hype images with each other, until the most hype image is found.",
    name: "News feed",
    id: "news-feed",
    suit: "flow",
    rating: { intimacy: 2, effort: 4 },
  },
  {
    text: "Find an inanimate object that reminds you of your peer, and use it as a phone to talk to them.",
    name: "Thread between us",
    id: "thread-between-us",
    suit: "astral",
    rating: { intimacy: 5, effort: 1 },
  },
  {
    text: "I. Close your eyes\nII. Make an intuitive movement or gesture with your whole body \nIII. Sketch it on a piece of paper or a postcard\nIV. Send it in the mail (ask for an address if needed)",
    name: "Tangible poses",
    id: "tangible-poses",
    suit: "flow",
    rating: { intimacy: 5, effort: 5 },
  },
  {
    text: "I. Calculate the angle between your cities\nII. Use a compass to walk 10 minutes in that direction\nIII. Share the map pin and a photo of where you end up",
    name: "Towards you ",
    id: "towards-you ",
    suit: "weave",
    rating: { intimacy: 5, effort: 4 },
  },
  {
    text: "Make an e-card to say good morning",
    name: "Morning",
    id: "morning",
    suit: "chime",
    rating: { intimacy: 3, effort: 4 },
  },
  {
    text: "I. Take a photo or make a sketch of where you are right now\nII. Annotate it with all the sounds you hear around you",
    name: "Sounds around",
    id: "sounds-around",
    suit: "astral",
    rating: { intimacy: 4, effort: 4 },
  },
  {
    text: "Share the first link you looked at today",
    name: "Tweet",
    id: "tweet",
    suit: "flow",
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

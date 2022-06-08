const exercises: Exercise[] = [
  {
    text: "Share 3-5 songs that you are listening to today.",
    name: "Mixtape",
    id: "mixtape",
    suit: "chime",
    rating: { intimacy: 3, effort: 2 },
    index: 1
  },
  {
    text: "I. Find a device that records sound \nII. Move the device along your body from head to toe\nIII. Let each body part 'speak for itself' along the way\nIV. Send the recordings to each other ",
    name: "Audible Body Scan",
    id: "audible-body-scan",
    suit: "astral",
    rating: { intimacy: 3, effort: 5 },
    index: 2
  },
  {
    text: "I. As you go about your day, notice if something that reminds you of your peer\nII. Make and share a record of it",
    name: "Forget Me Not",
    id: "forget-me-not",
    suit: "astral",
    rating: { intimacy: 4, effort: 1 },
    index: 3
  },
  {
    text: "I. Get on a voice call and go outside together.\nII. Narrate your surroundings out loud. It's okay if your voices overlap or cut into each other.\nIII. Notice how your attention shifts between the two places.",
    name: "Neighborhood Tour",
    id: "neighborhood-tour",
    suit: "weave",
    rating: { intimacy: 4, effort: 5 },
    index: 4
  },
  {
    text: "Leave each other a few voice messages across the different digital channels where you are both connected.",
    name: "Scavenger Hunt",
    id: "scavenger-hunt",
    suit: "chime",
    rating: { intimacy: 4, effort: 4 },
    index: 5
  },
  {
    text: "Set up an video call and then continue do whatever you were doing (no need to acknowledge each other).",
    name: "Parallel Play",
    id: "parallel-play",
    suit: "flow",
    rating: { intimacy: 4, effort: 5 },
    index: 6
  },
  {
    text: "Check in on each other's friends",
    name: "Takes a Village",
    id: "takes-a-village",
    suit: "weave",
    rating: { intimacy: 5, effort: 5 },
    index: 7
  },
  {
    text: "Work on a project together",
    name: "Collaborate",
    id: "collaborate",
    suit: "weave",
    rating: { intimacy: 5, effort: 5 },
    index: 8
  },
  {
    text: "I. Come up with a few questions\nII. Discuss by co-writing on an Etherpad (or equivalent)",
    name: "For the Record",
    id: "for-the-record",
    suit: "flow",
    rating: { intimacy: 3, effort: 5 },
    index: 9
  },
  {
    text: "Draw the network diagram between you two.",
    name: "Birds Eye View",
    id: "birds-eye-view",
    suit: "weave",
    rating: { intimacy: 3, effort: 5 },
    index: 10
  },
  {
    text: "Send a notification every time you are experiencing a heightened emotion today.",
    name: "I'm Feeling...",
    id: "i'm-feeling...",
    suit: "chime",
    rating: { intimacy: 3, effort: 3 },
    index: 11
  },
  {
    text: "Share increasingly hype images with each other, until the most hype image is found.",
    name: "Hype or hyper",
    id: "hype-or-hyper",
    suit: "flow",
    rating: { intimacy: 2, effort: 4 },
    index: 12
  },
  {
    text: "Find an inanimate object that reminds you of your peer, and use it as a phone to talk to them.",
    name: "Ghost Call",
    id: "ghost-call",
    suit: "astral",
    rating: { intimacy: 5, effort: 1 },
    index: 13
  },
  {
    text: "I. Close your eyes\nII. Make an intuitive movement or gesture with your whole body \nIII. Sketch it on a piece of paper or a postcard\nIV. Send it in the mail (ask for an address if needed)",
    name: "Paper Pose",
    id: "paper-pose",
    suit: "flow",
    rating: { intimacy: 5, effort: 5 },
    index: 14
  },
  {
    text: "I. Calculate the angle between your cities\nII. Use a compass to walk 10 minutes in that direction\nIII. Share the map pin and a photo of where you end up",
    name: "On My Way",
    id: "on-my-way",
    suit: "weave",
    rating: { intimacy: 5, effort: 4 },
    index: 15
  },
  {
    text: "Make an e-card to say good morning",
    name: "Greeting Card",
    id: "greeting-card",
    suit: "chime",
    rating: { intimacy: 3, effort: 4 },
    index: 16
  },
  {
    text: "I. Take a photo or make a sketch of where you are right now\nII. Annotate it with all the sounds you hear around you",
    name: "Soundscape",
    id: "soundscape",
    suit: "astral",
    rating: { intimacy: 4, effort: 4 },
    index: 17
  },
  {
    text: "Share the first link you looked at today",
    name: "News Feed",
    id: "news-feed",
    suit: "flow",
    rating: { intimacy: 2, effort: 1 },
    index: 18
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

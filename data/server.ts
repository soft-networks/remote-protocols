
const serverURL =  `https://remote-protocol-server.glitch.me/`;

export const getRatings = (id: string) => {
  return fetch(`${serverURL}/protocol?id=${id}`);
}

export const postRating = (id: string, effort: number, intimacy: number, callback: () => void) => {
  const request = JSON.stringify({ name: id, effort: effort, intimacy: intimacy });
  console.log("Sending", request);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: request,
  };
  fetch("https://remote-protocol-server.glitch.me/protocol", requestOptions)
    .then(() => {
      console.log("sucessfull post");
      callback();
    })
    .catch((e) => {
      console.log(e);
    });
};

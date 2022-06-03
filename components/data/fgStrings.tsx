
export const OraclePromptText = [
  "missing someone from afar?",
  "consult this connection wizard for how best to reach them",
];

export const OracleUpdatingText = [ 
  ["after a brief exercise", "the wizard will select the most promising protocol for you to connect with your remote peer today"],
  ["to begin, please bring your subject to mind"],
  ["what makes them who they are? "],
  ["tune into their characteristics and traits", "to help the wizard identify them"],
  ["LOCATING PEER"],
  ["PEER LOCATED"],
  ["rest one hand on this screen", "and the other on your heart"],
  ["SELECTING PROTOCOL"],
]

export const OracleCompletedText = [
  ["PROTOCOL FOUND"]
]

export const textToP = (text: string[]) => {
  return (
    <div className="stack center-text">
      {text.map((t, i) => (
        <p key={"line-" + i} className="grayFill">{t}</p>
      ))}
    </div>
  );
}
export const BGHEIGHT = 60;
export const BGWIDTH = 120;
export const RAND_DENSITY = 0.99;


/* Rendering */ 

export const textToP = (text: string[]) => {
  return (
    <div className="stack:s-1">
      {text.map((t, i) => (
        <p key={"line-" + i}>{t}</p>
      ))}
    </div>
  );
}


export const AsciiRender = ({text}: {text:string}) => {
  return (
    <pre>
      <code>
        {text}
      </code>
    </pre>
  )
}

/* Background manipulation */

function getRandomCharacter(randomChars?: string[], density: number = RAND_DENSITY) {
  if (randomChars && Math.random() > density) {
    return randomChars[Math.floor(Math.random() * randomChars.length)];
  } else {
    return " ";
  }
}

export function padString(s: string, randomChars?: string[], density?: number) {
  let eachLine = s.split("\n");
  let numLines = eachLine.length;

    //Add extra lines
    if (numLines < BGHEIGHT) {
      let numPadding = BGHEIGHT - numLines;
      let numEachSide = Math.floor(numPadding / 2);
      for (let i =0; i< numEachSide; i++) {
        eachLine.push(" ");
        eachLine.unshift(" ");
      }
      
    }
  //For each line, pad sides 
  for (let i=0; i < eachLine.length; i++) {
    let line = eachLine[i];
    let pad = Math.floor((BGWIDTH - line.length) / 2);
    let leftPad = "";
    let rightPad = "";
    for (let j=0; j < pad; j++) {
      leftPad += getRandomCharacter(randomChars, density);
      rightPad += getRandomCharacter(randomChars, density);
    }
    eachLine[i] = leftPad + line + rightPad;
  }

  let paddedString = eachLine.join("\n");
  return paddedString
}



export function whitespaceToDots(text: string, char: string = ".") {

  
  let lines = text.split("\n");

  for (let i =0 ; i< lines.length; i++){
    let line = lines[i];
    let newLine = "";
    for (let j =0; j < line.length; j++) {
      let c = line[j];
      if (c === " ") {
        newLine += char;
      } else {
        newLine += c;
      }
    }
    lines[i] = newLine;
  }
  return lines.join("\n");
}
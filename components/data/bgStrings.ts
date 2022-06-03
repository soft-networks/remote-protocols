export const BGHEIGHT = 60;
export const BGWIDTH = 120;
const RAND_DENSITY = 0.99;

let bgGalaxy = `
.      .      .      .      .      .      .      .      .      .      .
.   .       .       .       .       .       . .      .      .      .      .     
.                               .       .       .       .       .       .
.      .      .      .      .      .      .      .      .      .      .
.                               .       .       .       .       .       .
   .        .        .        .        .        .        .        .        .
     .         .         .        _......____._        .         .
   .          .          . ..--'"" .           """"""---...          .
                   _...--""        ................       '-.              .
                .-'        ...:'::::;:::%:.::::::_;;:...     '-.
             .-'       ..::::'''''   _...---'"""":::+;_::.      '.      .
  .        .' .    ..::::'      _.-""               :::)::.       '.
         .      ..;:::'     _.-'         .             f::'::    o  _
        /     .:::%'  .  .-"                        .-.  ::;;:.   /" "x
  .   .'  ""::.::'    .-"     _.--'"""-.           (   )  ::.::  |_.-' |
     .'    ::;:'    .'     .-" .d@@b.   \    .    . '-'   ::%::   \_ _/    .
    .'    :,::'    /   . _'    8@@@@8   j      .-'       :::::      " o
    | .  :.%:' .  j     (_)    '@@@P'  .'   .-"         ::.::    .  f
    |    ::::     (        -..____...-'  .-"          .::::'       /
.   |    ':'::    '.                ..--'        .  .::'::   .    /
    j     ':::::    '-._____...---""             .::%:::'       .'  .
     \      ::.:%..             .       .    ...:,::::'       .'
 .    \       ':::':..                ....::::.::::'       .-'          .
       \    .   '':::%::'::.......:::::%::.::::''       .-'
      . '.        . ''::::::%::::.::;;:::::'''      _.-'          .
  .       '-..     .    .   '''''''''         . _.-'     .          .
         .    ""--...____    .   ______......--' .         .         .
  .        .        .    """"""""     .        .        .        .        .
 .       .       .       .       .       .       .       .       .
     .      .      .      .      .      .      .      .      .      .      .
 .      .      .      .      .      .      .      .      .      .      .
.                               .       .       .       .       .       .`;

let bgDots = `
.               .            .           .              .      

.                        .      .           .        .      “                  .

     .         "                     .           .                     .          .
       .               .            .           .              .      

.                        .                .             “                  .

     .                                                                          .
    .                                                            

    .                                                                              .
    
        .                                                             .          .

.               .                                            

.                        .      .                                           .

.         "                     .           .                     .          .
  
.               .            .           .              .      

.                        .      .           .        .      “                  .

      .         "                     .           .                     .          .
      
`

const bgHome = `
          _,-._                                                  
         / \\_/ \\                                                 
         >-(_)-<                                                 
         \\_/ \\_/                                                 
           '-'                                                   
                                            %




 #                                                                  
     .


                                                                       * 

 

                                                             ____
                                                            ||""||
                                                            ||__||
                                                            [ -=.]
                                                            ======
<3                                                                
   <3                                                               
`



function getRandomCharacter(randomChars?: string[], density: number = RAND_DENSITY) {
  if (randomChars && Math.random() > density) {
    return randomChars[Math.floor(Math.random() * randomChars.length)];
  } else {
    return " ";
  }
}

function padString(s: string, randomChars?: string[], density?: number) {
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

const bgMapping: { [key: string]: string } = {
  blank: padString(' ', ["."], 0.997),
  galaxy: padString(bgGalaxy, ["."], 0.7),
  dots: padString(bgDots, [".", ","], 0.99),
  home: padString(bgHome, ["."])
};

export default bgMapping;

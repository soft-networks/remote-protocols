import React, { useEffect } from "react";
import bgMapping  from "./data/bgStrings"


/* Create a context that accepts a background ID and just returns a string */

export interface BackgroundContextType {
  setBGID: (id: string) => void
}

export const BackgroundContext = React.createContext<BackgroundContextType>({
  setBGID: () => {},
});


const BackgroundProvider: React.FC = ({children}) => {
  
    const [bgID, setBGID] = React.useState("");
    const [bgStringNew, setBGStringNew] = React.useState("");
    const [bgStringCurrent, setBgStringCurrent] = React.useState("");

    useEffect(() => {
      let newBGString = bgMapping[bgID] || "";
      setBgStringCurrent(bgMapping[bgID] || "");

      let eachLine = newBGString.split("\n");
      console.log("lines - " , eachLine.length , eachLine.map((e) => e.length) );
      //animate between old and new, for now we're updating to new 
    }, [bgID])
    
  
    const BackgroundComponent = (
      <BackgroundContext.Provider value={{setBGID}}>
        <div className="fullBleed center">
        {children}
          <div className="fullBleed absolute center">
           <pre>
             <code>
               {bgStringCurrent}
             </code>
           </pre>
          </div>
        </div>
      </BackgroundContext.Provider>
    );
  
    return BackgroundComponent;
}

export const useSetBackgroundID = () => {
  const { setBGID } = React.useContext(BackgroundContext);
  return setBGID;
}

export default BackgroundProvider;
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import bgMapping from "../data/backgrounds";
import { BG_NUM_STAGES, BG_TRANSITION_TIME } from "../data/times";
import { AsciiRender, BGWIDTH } from "../lib/textTransform";

/* Create a context that accepts a background ID and just returns a string */

export interface BackgroundContextType {
  setBGID: (id: string) => void;
}

export const BackgroundContext = React.createContext<BackgroundContextType>({
  setBGID: () => {},
});

const BackgroundProvider: React.FC = ({ children }) => {
  const [bgID, setBGID] = React.useState("");
  const [bgStringNew, setBGStringNew] = React.useState("");
  const [bgStringCurrent, setBgStringCurrent] = React.useState(bgMapping["blank"]);
  const [transitionProbability, setTransitionProbability] = React.useState(0.0);
  const currentTransition = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (currentTransition.current) clearTimeout(currentTransition.current);
    };
  }, []);

  useEffect(() => {
    console.log("Setting background to", bgID);
    let newBGString = "";
    if (!bgID || !bgMapping[bgID]) {
      newBGString = bgMapping["blank"];
    } else {
      newBGString = bgMapping[bgID] || "";
    }

    setBGStringNew(newBGString);
    setTransitionProbability(0.0);
  }, [bgID]);

  useEffect(() => {
    if (transitionProbability > 1) {
      return;
    }
    setBgStringCurrent((s) => {
      let lines1 = s.split("\n");
      let lines2 = bgStringNew.split("\n");
      let newStrings = [];
      for (let i = 0; i < lines1.length; i++) {
        let l = lines1[i];
        let l2 = lines2[i] || "";
        let ns = "";
        for (let j = 0; j < BGWIDTH; j++) {
          if (Math.random() < transitionProbability) {
            ns += l2[j] || " ";
          } else {
            ns += l[j] || " ";
          }
        }
        newStrings.push(ns);
      }
      return newStrings.join("\n");
    });
    currentTransition.current = setTimeout(() => {
      setTransitionProbability(transitionProbability + 1 / BG_NUM_STAGES);
    }, BG_TRANSITION_TIME / BG_NUM_STAGES);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionProbability, bgStringNew]);

  const BackgroundComponent = (
    <BackgroundContext.Provider value={{ setBGID }}>
      <div className="flex-1 padded">
        <div className="center:absolute maxFullScreen noOverflow align:center">
            <AsciiRender text={bgStringCurrent} />
        </div>
        {children}
      </div>
    </BackgroundContext.Provider>
  );

  return BackgroundComponent;
};

export const useSetBackgroundID = () => {
  const { setBGID } = React.useContext(BackgroundContext);
  return setBGID;
};

export default BackgroundProvider;

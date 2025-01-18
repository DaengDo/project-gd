import { useReducer } from "react";

import randomEventList from "./randomEvent.json";
import { randomEventReducer } from "./randomEventReducer";
import { RandomEventContext } from "./RandomEventContext";

const RandomEventProvider = ({ children }: { children: React.ReactNode }) => {
  const [randomEvent, dispatch] = useReducer(randomEventReducer, randomEventList);

  return (
    <RandomEventContext.Provider value={{ dispatch, randomEvent }}>
      {children}
    </RandomEventContext.Provider>
  );
};

export { RandomEventProvider };

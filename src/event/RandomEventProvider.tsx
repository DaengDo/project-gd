import { useReducer } from "react";

import RANDOM_EVENT_LIST from "./randomEvent.json";
import { randomEventReducer } from "./randomEventReducer";
import { RandomEventContext } from "./RandomEventContext";

const RandomEventProvider = ({ children }: { children: React.ReactNode }) => {
  const [randomEvents, dispatch] = useReducer(randomEventReducer, RANDOM_EVENT_LIST);

  return (
    <RandomEventContext.Provider value={{ dispatch, randomEvents }}>
      {children}
    </RandomEventContext.Provider>
  );
};

export { RandomEventProvider };

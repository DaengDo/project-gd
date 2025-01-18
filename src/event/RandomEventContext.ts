import { createContext } from "react";

import { RandomEventAction } from "./randomEventReducer";
import { RandomEvent } from "./randomEventType";

const RandomEventContext = createContext<{
  randomEvent: RandomEvent[];
  dispatch: React.Dispatch<RandomEventAction>;
} | null>(null);

export { RandomEventContext };

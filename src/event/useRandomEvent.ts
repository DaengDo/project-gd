import { useContext } from "react";

import { RandomEventContext } from "./RandomEventContext";

const useRandomEvent = () => {
  const result = useContext(RandomEventContext);
  if (result === null) throw Error("useRandomEvent must be used in RandomEventProvider");
  return result;
};

export { useRandomEvent };

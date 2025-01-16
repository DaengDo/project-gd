import { useContext } from "react";

import { ResourceContext } from "./resourceContext";

const useResource = () => {
  const result = useContext(ResourceContext);
  if (result === null) throw Error("useResource must be used in ResourceProvider");
  return result;
};

export { useResource };

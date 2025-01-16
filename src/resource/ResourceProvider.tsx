import { useReducer } from "react";

import { RESOURCE } from "./resourceConst";
import { ResourceContext } from "./resourceContext";
import { resourceReducer } from "./resourceReducer";

import { getRangedRandom } from "../utils/primitive";

const ResourceProvider = ({ children }: { children: React.ReactNode }) => {
  const [resource, dispatch] = useReducer(resourceReducer, {
    cloth: getRangedRandom(RESOURCE.MIN, RESOURCE.MAX),
    herb: getRangedRandom(RESOURCE.MIN, RESOURCE.MAX),
    meal: getRangedRandom(RESOURCE.MIN, RESOURCE.MAX),
    water: getRangedRandom(RESOURCE.MIN, RESOURCE.MAX),
    arrows: getRangedRandom(RESOURCE.MIN, RESOURCE.MAX),
    bow: getRangedRandom(RESOURCE.MIN, RESOURCE.MAX),
    sword: getRangedRandom(RESOURCE.MIN, RESOURCE.MAX),
  });

  return (
    <ResourceContext.Provider value={{ resource, dispatch }}>{children}</ResourceContext.Provider>
  );
};

export { ResourceProvider };

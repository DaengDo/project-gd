import { createContext } from "react";

import { Resource } from "./resourceType";
import { ResourceAction } from "./resourceReducer";

const ResourceContext = createContext<{
  resource: Resource;
  dispatch: React.Dispatch<ResourceAction>;
} | null>(null);

export { ResourceContext };

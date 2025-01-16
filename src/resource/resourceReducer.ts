import { add, getRangedRandom, subtract } from "../utils/primitive";

import { RESOURCE } from "./resourceConst";
import { Resource } from "./resourceType";

type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K>;
}[keyof T] &
  Partial<T>;

type ResourceAction =
  | { type: "reset" }
  | {
      type: "decrease" | "increase";
      target: AtLeastOne<Resource>;
    }
  | {
      type:
        | "least" // RESOURCE.MIN + 1
        | "full" // RESOURCE.MAX
        | "clear"; // RESOURCE.MIN
      target: AtLeastOne<{ [K in keyof Resource]: boolean }>;
    };

const resourceReducer = (state: Resource, action: ResourceAction): Resource => {
  type ResourceKeyValue = [keyof Resource, number];

  const mapState = (callback: (res: ResourceKeyValue) => ResourceKeyValue) =>
    Object.fromEntries((Object.entries(state) as ResourceKeyValue[]).map(callback)) as Resource;

  if (action.type === "decrease") {
    return mapState(([k, v]) => [k, subtract(v, action.target[k] || 0)]);
  }

  if (action.type === "increase") {
    return mapState(([k, v]) => [k, add(v, action.target[k] || 0)]);
  }

  if (action.type === "clear") {
    return mapState(([k, v]) => [k, action.target[k] ? RESOURCE.MIN : v]);
  }

  if (action.type === "least") {
    return mapState(([k, v]) => [k, action.target[k] ? RESOURCE.MIN + 1 : v]);
  }

  if (action.type === "full") {
    return mapState(([k, v]) => [k, action.target[k] ? RESOURCE.MAX : v]);
  }

  if (action.type === "reset") {
    return mapState(([k]) => [k, getRangedRandom(RESOURCE.MIN, RESOURCE.MAX)]);
  }

  throw new TypeError("action.type does not matched");
};

export { resourceReducer };
export type { ResourceAction };

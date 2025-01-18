import { useEffect } from "react";
import { useRandomEvent } from "../event/useRandomEvent";
import { useResource } from "../resource/useResource";
import { getWeightedRandom } from "../utils/algorithm";

const RichText = () => {
  const { randomEvent } = useRandomEvent();
  // const { resource } = useResource();

  useEffect(() => {
    const eventList = getWeightedRandom(
      randomEvent.map((e) => ({ key: e.type, weight: e.probability })),
    );
    console.log(eventList);
  }, []);

  return <div>text</div>;
};

export { RichText };

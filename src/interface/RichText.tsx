import { useEffect, useState } from "react";
import { useRandomEvent } from "../event/useRandomEvent";

import { getWeightedRandom } from "../utils/algorithm";

const RichText = () => {
  const { randomEvents } = useRandomEvent();

  const [prevEvents, setPrevEvents] = useState<string[]>();

  useEffect(() => {
    const eventList = getWeightedRandom(
      randomEvents.map((e) => ({ key: e.type, weight: e.probability })),
    );
    console.log(eventList);
  }, []);

  return (
    <>
      {/* <h1>{resource.prevEvent.length}</h1> */}
      <div>text</div>
    </>
  );
};

export { RichText };

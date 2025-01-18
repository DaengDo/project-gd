import { RandomEvent } from "./randomEventType";

type RandomEventAction =
  | {
      type: "probability";
      payload: {
        target: string; // 랜덤 이벤트 이름, id
        probability: number;
      };
    }
  | {
      type: "event";
      payload: RandomEvent | string; // 이벤트 객체면 추가, 아니라면 제외
    };

const randomEventReducer = (
  prevEventList: RandomEvent[],
  { type, payload }: RandomEventAction,
): RandomEvent[] => {
  if (type === "event") {
    const isEventAdding = typeof payload !== "string";
    if (isEventAdding) {
      console.log(`이벤트(${payload.type}) 추가됨`);
      return [...prevEventList, payload];
    } else {
      console.log(`이벤트(${payload}) 제외됨`);
      return prevEventList.filter((e) => e.type !== payload);
    }
  }

  if (type === "probability") {
    const { probability, target } = payload;
    const isEventExist = prevEventList.some((e) => e.type === target);

    if (!isEventExist) {
      console.log(`이벤트(${target}) 확률 조정 시도 했으나, 해당 이벤트 없음`);
      return prevEventList;
    }

    console.log(`이벤트(${target}) 확률 가중치가 ${probability}로 변경됨`);
    return prevEventList.map((e) =>
      e.type === target ? ({ ...e, probability } satisfies RandomEvent) : e,
    );
  }

  return prevEventList;
};

export { randomEventReducer };
export type { RandomEventAction };

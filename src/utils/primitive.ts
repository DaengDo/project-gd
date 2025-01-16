const throwError = (msg: string) => {
  throw new Error(msg);
};

const getRangedRandom = (min: number, max: number) =>
  min <= max
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : throwError("min must be smaller than max");

const subtract = (a: number, b: number) => a - b;
const add = (a: number, b: number) => a + b;

export { add, subtract, getRangedRandom };

function getRangedRandom(min: number, max: number) {
  if (min > max) {
    throw new Error("min 값은 max 값보다 작거나 같아야 합니다.");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRangedRandom };

// 가중치 랜덤 알고리즘(weighted random selection algoritm)
const getWeightedRandom = (items: { key: string; weight: number }[]) => {
  const totalWeight = items.map(({ weight }) => weight).reduce((prev, curr) => prev + curr, 0);

  const candidates = items
    .map(({ key, weight }) => ({ key, weight: weight / totalWeight }))
    .sort((prev, curr) => prev.weight - curr.weight);

  const pivot = Math.random();

  let acc = 0;

  for (const candidate of candidates) {
    acc += candidate.weight;

    if (pivot <= acc) return candidate;
  }

  console.error("can not found");

  return candidates[-1];
};

export { getWeightedRandom };

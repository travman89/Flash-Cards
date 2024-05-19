const findSelectorXY = (index: number) => {
  const x = (index % 5) * 36 - 1;
  const y = Math.floor(index / 5) * 36 - 1;
  return { x, y };
};

export { findSelectorXY };

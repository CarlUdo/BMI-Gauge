export const getKilogramsToGain = (
  height: number,
  weight: number,
  wantedBmi: number,
) => {
  return parseFloat(
    (wantedBmi * Math.pow(height / 100, 2) - weight).toFixed(2),
  );
};

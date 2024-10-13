export const getNumberOfKgToGain = (height: number, weight: number, wantedBmi: number) => {
  return parseFloat((wantedBmi * Math.pow(height / 100, 2) - height).toFixed(2));
};

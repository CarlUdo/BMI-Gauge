export const getNumberOfKgToLose = (height: number, weight: number, wantedBmi: number) => {
  return parseFloat((wantedBmi * Math.pow(Number(height) / 100, 2) + Number(weight)).toFixed(2));
};

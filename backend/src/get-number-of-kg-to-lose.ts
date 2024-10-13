export const getNumberOfKgToLose = (height: number, weight: number, wantedBmi: number) => {
  return parseFloat((weight - wantedBmi * Math.pow(height / 100, 2)).toFixed(2));
};

export const calculateBmi = (height: number, weight: number) => {
  return parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
};

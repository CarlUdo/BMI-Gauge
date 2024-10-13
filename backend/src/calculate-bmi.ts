export const calculateBmi = (height: string, weight: string) => {
  return parseFloat((Number(weight) / Math.pow(Number(height) / 100, 2)).toFixed(2));
};

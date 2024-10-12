export type BmiRequest = {
  height: string;
  weight: string;
};

export type BmiAdvice = {
  underweight: string;
  healthyRange: string;
  overweight: string;
  obesity: string;
  severeObesity: string;
};

export type BmiRequest = {
  height: string;
  weight: string;
};

export type Advice = {
  underweight: string;
  healthyRange: string;
  overweight: string;
  obesity: string;
  severeObesity: string;
};

export type RangeType = "Underweight" | "Healthy" | "Overweight" | "Obesity" | "Severe obesity";

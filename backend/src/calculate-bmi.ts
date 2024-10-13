import type { BmiRequest } from "./types";

export const calculateBmi = (bmiRequest: BmiRequest) => {
  return parseFloat((Number(bmiRequest.weight) / Math.pow(Number(bmiRequest.height) / 100, 2)).toFixed(2));
};

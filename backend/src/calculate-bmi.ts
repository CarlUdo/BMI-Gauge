import type { BmiRequest } from "./types";

export const calculateBmi = (bmiRequest: BmiRequest) => {
  return Number(bmiRequest.height) / Math.pow(Number(bmiRequest.weight), 2);
};

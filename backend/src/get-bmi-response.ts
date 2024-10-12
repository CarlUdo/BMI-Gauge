import { calculateBmi } from "./calculate-bmi";
import { getBmiAdvice } from "./get-bmi-advice";
import type { BmiRequest } from "./types";

export const getBmiResponse = (bmiRequest: BmiRequest) => {
  const bmi = calculateBmi(bmiRequest);
  const bmiAdvice = getBmiAdvice(bmi);

  return {
    bmi,
    bmiAdvice,
  };
};

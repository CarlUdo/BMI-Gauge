import { calculateBmi } from "./calculate-bmi";
import { getAdvice } from "./get-advice";
import type { BmiRequest } from "./types";

export const getBmiResponse = (bmiRequest: BmiRequest) => {
  const bmi = calculateBmi(bmiRequest);
  const advice = getAdvice(bmi);

  return {
    bmi: bmi.toString(),
    advice,
  };
};

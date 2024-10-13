import { calculateBmi } from "./calculate-bmi";
import { getAdvice } from "./get-advice";
import type { BmiRequest } from "./types";
import { validateBmiRequest } from "./validate-bmi-request";

export const getBmiResponse = (bmiRequest: BmiRequest) => {
  validateBmiRequest(bmiRequest);
  
  const bmi = calculateBmi(bmiRequest);
  const { advice, range } = getAdvice(bmi);

  return {
    bmi: bmi.toString(),
    advice,
    range
  };
};

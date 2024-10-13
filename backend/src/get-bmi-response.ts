import { calculateBmi } from "./calculate-bmi";
import { getAdvice } from "./get-advice";
import { getInfoForAdjacentRange} from "./get-info-for-adjacent-range";
import type { BmiRequest } from "./types";
import { validateBmiRequest } from "./validate-bmi-request";

export const getBmiResponse = (bmiRequest: BmiRequest) => {
  validateBmiRequest(bmiRequest);

  const height = Number(bmiRequest.height);
  const weight = Number(bmiRequest.weight);

  const bmi = calculateBmi(height, weight);

  const { range, emoji, advice } = getAdvice(bmi);

  const info = getInfoForAdjacentRange(height, weight, bmi);

  return { 
    height,
    weight,
    bmi,
    range,
    emoji, 
    info,
    advice,        
  };
};

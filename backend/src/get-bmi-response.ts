import { calculateBmi } from "./calculate-bmi";
import { getAdvice } from "./get-advice";
import { getKgInfoToNextRange } from "./get-kg-info-to-next-range";
import type { BmiRequest } from "./types";
import { validateBmiRequest } from "./validate-bmi-request";

export const getBmiResponse = (bmiRequest: BmiRequest) => {
  validateBmiRequest(bmiRequest);

  const height = Number(bmiRequest.height);
  const weight = Number(bmiRequest.weight);

  const bmi = calculateBmi(height, weight);

  const { advice, range, emoji } = getAdvice(bmi);

  const info = getKgInfoToNextRange(height, weight, bmi);

  return {
    bmi: bmi,
    advice,
    range,
    emoji,
    info,
    height,
    weight,
  };
};

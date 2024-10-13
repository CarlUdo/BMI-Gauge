import { getNumberOfKgToGain } from "./get-number-of-kg-to-gain";
import { getNumberOfKgToLose } from "./get-number-of-kg-to-lose";

export const getKgInfoToNextRange = (height: number, weight: number, bmi: number) => {
  if (bmi < 18.5) return `Gain ${getNumberOfKgToGain(height, weight, 18.5)} kg to get into healthy range`;
  if (bmi >= 18.5 && bmi < 25) return `Gain ${getNumberOfKgToGain(height, weight, 25)} kg to get into overweight range. Lose ${getNumberOfKgToLose(height, weight, 18.49)} kg to get into underweight range`;
  if (bmi >= 25 && bmi < 30) return `Gain ${getNumberOfKgToGain(height, weight, 30)} kg to get into obesity range. Lose ${getNumberOfKgToLose(height, weight, 24.99)} kg to get into healthy range`;
  if (bmi >= 30 && bmi < 40) return `Gain ${getNumberOfKgToGain(height, weight, 40)} kg to get into severe obesity range. Lose ${getNumberOfKgToLose(height, weight, 29.99)} kg to get into overweight range`;
  return `Lose ${getNumberOfKgToLose(height, weight, 39.99)} kg to get into obesity range`;
};

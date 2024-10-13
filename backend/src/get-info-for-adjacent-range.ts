import { getKilogramsToGain } from "./get-kilograms-to-gain";
import { getKilogramsToLose} from "./get-kilograms-to-lose";

export const getInfoForAdjacentRange = (
  height: number,
  weight: number,
  bmi: number,
) => {
  if (bmi < 18.5) {
    const kilogramsToGain = getKilogramsToGain(height, weight, 18.5);
    return `Gain ${kilogramsToGain} kg to get into healthy range.`;
  } 

  if (bmi >= 18.5 && bmi < 25) {
    const kilogramsToGain = getKilogramsToGain(height, weight, 25);
    const kilogramsToLose = getKilogramsToLose(height, weight, 18.49);
    return `Gain ${kilogramsToGain} kg to get into overweight range. Lose ${kilogramsToLose} kg to get into underweight range.`;
  }
    
  if (bmi >= 25 && bmi < 30) {
    const kilogramsToGain = getKilogramsToGain(height, weight, 30);
    const kilogramsToLose = getKilogramsToLose(height, weight, 24.99);
    return `Gain ${kilogramsToGain} kg to get into obesity range. Lose ${kilogramsToLose} kg to get into healthy range.`;
  }
    
  if (bmi >= 30 && bmi < 40) {
    const kilogramsToGain = getKilogramsToGain(height, weight, 40);
    const kilogramsToLose = getKilogramsToLose(height, weight, 29.99);
    return `Gain ${kilogramsToGain} kg to get into severe obesity range. Lose ${kilogramsToLose} kg to get into overweight range.`;
  }
  
  const kilogramsToLose = getKilogramsToLose(height, weight, 39.99);
  return `Lose ${kilogramsToLose} kg to get into obesity range.`;
};

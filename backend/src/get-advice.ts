import type { Advice } from "./types";

const underweight = `You're struggling with underweight. Gaining weight can be a healthy and gradual process. Seeking guidance from a nutritionist or dietitian can help you develop a balanced plan to reach a healthier weight. Take care of yourself!`;

const healthyRange = `You're having a healthy weight. Maintaining a healthy weight is fantastic. Keep focusing on balanced nutrition, regular exercise, and staying mindful of your well-being. You’re doing great!`;

const overweight = `You are struggling with overweight. It’s great that you’re thinking about your health. Working with a healthcare professional can help you develop a personalized plan to achieve a healthier weight. Focus on balanced nutrition, regular physical activity, and self-care. You've got this!`;

const obesity = `You´re having obesity. Focusing on your health is commendable. Working closely with a healthcare provider can help create a sustainable plan to achieve a healthier weight. Remember to be patient with yourself, prioritize balanced nutrition and regular physical activity, and take things one step at a time. You're on the right path!`;

const severeObesity = `You´re having severe obesity. Severe obesity poses significant health risks and needs urgent attention. It increases the likelihood of serious conditions like heart disease, diabetes, and hypertension. It's crucial to seek help from a healthcare professional to develop a plan that addresses these risks and improves overall health. Your well-being is a priority; take action now.`;

const advice: Advice = {
  underweight,
  healthyRange,
  overweight,
  obesity,
  severeObesity,
};

export const getAdvice = (bmi: number) => {
  if (bmi < 18.5) return {advice: advice["underweight"], range: "underweight"};
  if (bmi >= 18.5 && bmi < 25) return {advice: advice["healthyRange"], range: "healthyRange"}; 
  if (bmi >= 25 && bmi < 30) return {advice: advice["overweight"], range: "overweight"}; 
  if (bmi >= 30 && bmi < 40) return {advice: advice["obesity"], range: "obesity"};
  return {advice: advice["severeObesity"], range: "severeObesity"};
};

import { BadRequestError } from "./Errors";
import { isInteger } from "./is-integer";
import type { BmiRequest } from "./types";

export const validateBmiRequest = (bmiRequest: BmiRequest) => {
  const { height, weight } = bmiRequest;

  if (!isInteger(height) || !isInteger(weight)) throw new BadRequestError('Height and weight must be integers.');

  if (Number(height) > 80 && Number(height) < 280) throw new BadRequestError('Height must be between 80 and 280 cm.');

  if (Number(weight) > 20 && Number(weight) < 700) throw new BadRequestError('Weight must be between 20 and 700 kg.');
};

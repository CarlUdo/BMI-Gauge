import test from "node:test";
import { getBmiResponse } from "./get-bmi-response";
import assert from "node:assert";

test("getBmiResponse throws error for height = ''", () => {
  const invalidRequest = {
    height: '',
    weight: '90'
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Height and weight must be integers./);
});

test("getBmiResponse throws error for weight = banana", () => {
  const invalidRequest = {
    height: '180',
    weight: 'banana'
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Height and weight must be integers./);
});

test("getBmiResponse throws error for height > 280", () => {
  const invalidRequest = {
    height: '281',
    weight: '90'
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Height must be between 80 and 280 cm./);
});

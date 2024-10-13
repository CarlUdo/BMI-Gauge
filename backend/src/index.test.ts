import test from "node:test";
import { getBmiResponse } from "./get-bmi-response";
import assert, { deepEqual } from "node:assert/strict";

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

test("getBmiResponse throws error for height < 80", () => {
  const invalidRequest = {
    height: '79',
    weight: '100'
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Height must be between 80 and 280 cm./);
});

test("getBmiResponse throws error for weight = ''", () => {
  const invalidRequest = {
    height: '189',
    weight: ''
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Height and weight must be integers./);
});

test("getBmiResponse throws error for weight = cake", () => {
  const invalidRequest = {
    height: '189',
    weight: 'cake'
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Height and weight must be integers./);
});

test("getBmiResponse throws error for weight > 700", () => {
  const invalidRequest = {
    height: '189',
    weight: '701'
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Weight must be between 20 and 700 kg./);
});

test("getBmiResponse throws error for weight < 20", () => {
  const invalidRequest = {
    height: '170',
    weight: '19'
  };

  assert.throws(() => {
    getBmiResponse(invalidRequest);
  }, /Weight must be between 20 and 700 kg./);
});

test("height 190 and weight 90 sould return bmi 24.93", () => {
  const validRequest = {
    height: '190',
    weight: '90'
  };

  const { bmi } = getBmiResponse(validRequest);

  deepEqual(bmi, '24.93');
});

test("height 170 and weight 70 should return advice for healthy range", () => {
  const validRequest = {
    height: '170',
    weight: '70'
  };

  const { advice } = getBmiResponse(validRequest);

  const healthyRange = `You're having a healthy weight. Maintaining a healthy weight is fantastic. Keep focusing on balanced nutrition, regular exercise, and staying mindful of your well-being. You’re doing great!`;

  deepEqual(advice, healthyRange);
});

test("height 150 and weight 200 should return range severeObesity", () => {
  const validRequest = {
    height: '150',
    weight: '200'
  };

  const { range } = getBmiResponse(validRequest);

  deepEqual(range, 'severeObesity');
});

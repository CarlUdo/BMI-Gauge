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

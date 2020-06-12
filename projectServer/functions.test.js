const math = require("./functions");
const constants = require("./constants");

// --- simple tests
test("change constant a to 3 is success", () => {
  constants.a = 3;
  expect(constants.a).toBe(3);
});

test("Adding 1 + 1 equals 2", () => {
  expect(math.sum(1, 1)).toBe(2);
});

test("Adding 1 + 1 not equals 3", () => {
  expect(math.sum(1, 1)).not.toBe(3);
});

test("is null", () => {
  expect(math.isNull()).toBeNull();
});

test("Adding 1 + 1 not equals 3", () => {
  expect(math.sum2(1, 1)).not.toBe(3);
});

test("Adding 1 + 2 + 3 not equals 7", () => {
  expect(math.sum3(1, 2, 3)).not.toBe(7);
});

test("Adding 1 + 2 + 3  equals 6", () => {
  expect(math.sum3(1, 2, 3)).toBe(6);
});

// --- test with mocks
test("sum2 is called once", () => {
  math.sum2 = jest.fn((a, b) => {});
  math.sum2(1, 2);
  expect(math.sum2).toHaveBeenCalled();
});

test("test asynchronous code", async () => {
  const result = await math.sum2Delayed(2, 3);
  expect(result).toBe(5);
});

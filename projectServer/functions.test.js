const math = require("./functions");
const constants = require("./constants");

constants.a = 2;

test("change constant a to 2 is success", () => {
  expect(constants.a).toBe(2);
});

test("Adding 1 + 1 equals 2", () => {
  expect(math.sum(1, 1)).toBe(2);
});

test("Adding 1 + 1 not equals 3", () => {
  expect(math.sum(1, 1)).not.toBe(3);
});

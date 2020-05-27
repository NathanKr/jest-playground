const math = require("./functions");
const constants = require("./constants");

// --- simple tests
test("change constant a to 3 is success", () => {
  constants.a = 3;
  expect(constants.a).toBe(3);
});


test("Adding 1 + 1 equals 2", () => {
  expect(math.sum2(1, 1)).toBe(2);
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


// --- using mocks
test("sum2 is called once", () => {
  math.sum2 = jest.fn((a, b) => {});
  math.sum2(1, 2);
  expect(math.sum2).toHaveBeenCalled();
});


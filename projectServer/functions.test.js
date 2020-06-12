const math = require("./functions");

test("Adding 1 + 1 equals 2", () => {
    expect(math.sum(1, 1)).toBe(2);
   });
   
   test("Adding 1 + 1 not equals 3", () => {
    expect(math.sum(1, 1)).not.toBe(3);
   });
   
   test("is null", () => {
    expect(math.isNull()).toBeNull();
   });
   
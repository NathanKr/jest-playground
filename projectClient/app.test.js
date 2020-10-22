import { sum } from "./app";

// const tests = () =>{
//     it('*** this is a test :  check 1 equal 11',expect(11).toEqual(11));
//     it('*** this is a test :  check true is truthy',expect(true).toBeTruthy());
//  }
//  describe("filterContactsReducer tests : ",tests);

test("Adding 1 + 1 equals 2", () => {
  // expect(2).toBe(2);
  expect(sum(1, 1)).toBe(2);
});

describe("datetime freeze", () => {
  beforeAll(() => {
    Date.now = jest.fn(() => 1487076708000) //14.02.2017
  });

afterAll(() =>{
    // todo nath bring back time ?? its in describe
})

  test("time now is 1487076708000", () => {
    expect(Date.now()).toBe(1487076708000);
  });

});

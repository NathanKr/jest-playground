describe("datetime freeze", () => {
  beforeAll(() => {
    Date.now = jest.fn(() => 1487076708000) //14.02.2017
  });

afterAll(() =>{
    // todo nath bring back time ?? its in describe
})

  //14.02.2017
  test("time now freezed year is 2017", () => {
    const dateObject = new Date(Date.now()) ;
    expect(dateObject.getFullYear()).toBe(2017);
  });

});

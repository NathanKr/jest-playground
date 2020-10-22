describe("datetime freeze", () => {
  beforeAll(() => {
    Date.now = jest.fn(() => 1487076708000) //14.02.2017
  });

  test("time now is NOT correct using just new Date", () => {
    const date = new Date()
    expect(date.getTime()).not.toBe(1487076708000);
  });
  


  test("time now is correct using string", () => {
    const date = new Date(Date.now())
    expect(date.toString()).toBe("Tue Feb 14 2017 14:51:48 GMT+0200 (Israel Standard Time)");
  });
  
  test("time now is 1487076708000 using getTime", () => {
    const date = new Date(Date.now())
    expect(date.getTime()).toBe(1487076708000);
  });

  //14.02.2017
  test("time now freezed year is 2017", () => {
    const dateObject = new Date(Date.now()) ;
    expect(dateObject.getFullYear()).toBe(2017);
  });

});

const constants = require('./constants');
jest.mock("./constants"); 

test('constant A Atrivial compare',() => {
    expect(constants.A).toBe(1)
})

test('constant B Atrivial compare',() => {
    expect(constants.B).toBe(2);
})

test('mock constant B is working',() => {
    // i am able to mock constant in this sand box test
    constants.A = 33; 
    expect(constants.A).toBe(33)
})
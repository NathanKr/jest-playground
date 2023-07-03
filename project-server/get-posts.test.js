const jsonplaceholder = require("./get-posts");
const axios = require("axios");
jest.mock("axios");

beforeEach(() => {
  // jest.clearAllMocks(); this is not enough
  jest.resetAllMocks();
});

test("axios.get return correct mocked value", async () => {
  axios.get.mockResolvedValue("xyz");
  const result = await jsonplaceholder.getPosts();

  expect(result).toBe("xyz");
});

test("test axios is called once", async () => {
  await jsonplaceholder.getPosts();
  const numCalls = axios.get.mock.calls.length;

  expect(numCalls).toBe(1);
});

test("mock module ---> return by default undefined per function", async () => {
  const result = await jsonplaceholder.getPosts();

  expect(result).toBeFalsy();
});

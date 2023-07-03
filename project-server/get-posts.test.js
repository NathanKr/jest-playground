const jsonplaceholder = require("./get-posts");
const axios = require("axios");
jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks(); // must be used here
});

test("test axios is called", async () => {
  axios.get.mockResolvedValue("default");
  const result = await jsonplaceholder.getPosts();

  expect(result).toBe("default");
});

test("test axios is called once", async () => {
  await jsonplaceholder.getPosts();
  const numCalls = axios.get.mock.calls.length;
  
  expect(numCalls).toBe(1);
});

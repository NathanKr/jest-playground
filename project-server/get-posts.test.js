const jsonplaceholder = require("./get-posts");
const axios = require("axios");
jest.mock("axios");

test("test axios is called", async () => {
  axios.get.mockResolvedValue("default");
  const result = await jsonplaceholder.getPosts();

  expect(result).toBe("default");
});

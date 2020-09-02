const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const result = await axios.get(url);
  return result;
}

module.exports = { getPosts };

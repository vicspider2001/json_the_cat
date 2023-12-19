const request = require('request');

const query = process.argv.slice(2);
if (!query) {
  console.log('Please provide breed name.');
  process.exit(1);
}
const url = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error finding breed name:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to get the resource. Status code: ${response.statusCode}`);
    process.exit(1);
  }

  const data = JSON.parse(body);
  data.map((item) => {
    console.log(item.description);
  });
});

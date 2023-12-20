const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
      
    }
  
    const data = JSON.parse(body);
    if (data.length === 0) {
      const errorMsg = `Breed ${breedName} was not found. We will make efforts to include more breeds`;
      callback(errorMsg, null);
    } else {
      data.map((item) => {
        const description = item.description;
        callback(null, description);
      });
    }
    
  });
};
module.exports = { fetchBreedDescription };




const request = require('request'); // HTTP request

// Making HTTP requests using request package
const fetchBreedDescription = function(breed, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`; // Custom URL with breed

  request(url, (error, response, body) => {

    if (error) {
      callback(`Failed to request details: ${error}`, null); // Edge Case: Request error
    }

    // console.log(response.json());
    const data = JSON.parse(body);

    if (data.length > 0) {
      callback(null, data[0].description);
    } else {
      callback(`Failed to find ${breed} description`, null); // Edge Case: Breed not found
    }
  });
};


module.exports = { fetchBreedDescription };
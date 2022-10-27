const request = require('request'); // HTTP request

let breed = process.argv.slice(2); // Accessing breed via command line
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`; // Custom URL with breed

// Making HTTP requests using request package
const breedDescription = function(breed) {

  request(url, (error, response, body) => {

    if (error) {
      console.log(`Failed to request details: ${error}`); // Edge Case: Request error
    }

    const data = JSON.parse(body);

    if (breed = data[0]) {
      console.log(breed.description);
    } else {
      console.log(`Failed to find ${breed} description`); // Edge Case: Breed not found
    }
  });
};

breedDescription();

const { fetchBreedDescription } = require('./breedFetcher');

let breed = process.argv.slice(2);

fetchBreedDescription(breed, (error, description) => {

  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});
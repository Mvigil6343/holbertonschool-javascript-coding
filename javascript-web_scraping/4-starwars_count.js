#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const wedgeAntillesId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const filmsData = JSON.parse(body);
    const wedgeAntillesUrl = `https://swapi-api.hbtn.io/api/people/${wedgeAntillesId}/`;

    let count = 0;

    filmsData.results.forEach(film => {
      if (film.characters.includes(wedgeAntillesUrl)) {
        count++;
      }
    });

    console.log(count);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});

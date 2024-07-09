#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

const wedgeAntillesId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const filmsData = JSON.parse(body);

    const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
      film.characters.includes(`https://swapi-api.hbtn.io/api/people/${wedgeAntillesId}/`)
    );

    console.log(filmsWithWedgeAntilles.length);
  }
});

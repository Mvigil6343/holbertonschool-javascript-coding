#!/usr/bin/node
const request = require('request');
const APIurl = process.argv[2];
const characterId = '18';

request(APIurl, function (error, response, body) {
  if (error) {
    console.log(error);
  }
  const movie = JSON.parse(body);
  let count = 0;
  movie.results.forEach(element => {
    element.characters.forEach(item => {
      if (item.includes(characterId)) {
        count += 1;
      }
    });
  });
  console.log(count);
});

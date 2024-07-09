#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const [, , URL, filePath] = process.argv;

request.get(URL, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  fs.writeFile(filePath, body, 'utf-8', (error) => {
    if (error) {
      console.error(error);
    }
  });
});

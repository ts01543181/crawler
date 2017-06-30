const cheerio = require('cheerio');
const request = require('request');
const validURL = require('valid-url');
//1.accepts a URL

function getData(url) {
  request(url, function(error, response, body) {

    let $ = cheerio.load(body);
    let links = $('a');
    $(links).each(function(i, link) {
      let eachLink = $(link).attr('href');

      if (validURL.isUri(eachLink)) {
        console.log(validURL.isUri(eachLink));
        getData(validURL.isUri(eachLink));
      }
    });
  });
}

getData('https://ilearn.ucr.edu/webapps/login/');

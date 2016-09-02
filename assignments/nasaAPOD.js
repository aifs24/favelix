var request = require('request');
var file = require('fs').createWriteStream('nasa.jpg');

request({url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', json: true}, function(err, res, json) {
  if (err) {
    console.log(err);
  }
  else{
    request(json.url).pipe(file);
    console.log(json.title);
  }
});

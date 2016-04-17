var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 3000;
var server = app.listen(port, function () {
  console.log('Server running on port ' + port);
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));

module.exports = {
  app : app
}
var app = require('./server-config.js').app;
var twitter = require('./twitter-config.js').twitter;
var helper = require('./helper.js');

app.get('/twitter/lists', function (req, res) {
    var username = req.query.username;
    var data = twitter.getCustomApiCall('/lists/list.json',{ screen_name: username},
    function(error, response, body){
        res.status(error.statusCode);
        res.send({
            "error" : error.data
        });
    },
    function(data){
      res.send(helper.get_lists_info(data));
    });
});

module.exports = {
  app: app
}

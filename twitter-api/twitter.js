var app = require('./server-config.js').app;
var twitter = require('./twitter-config.js').twitter;
var helper = require('./helper.js');

app.get('/twitter/lists', function (req, res) {
    var username = req.query.username;
    get_lists(username, res);
});

function get_lists(username, res){
  twitter.getCustomApiCall(
    '/lists/list.json',
    { screen_name: username},
    function(error, response, body){
        treat_error(res, error);
    },
    function(data){
      var tw_lists = helper.get_lists_info(data);
      res.send(tw_lists);
    });
}

app.get('/twitter/lists/tweets', function(req, res){
  var list_id = req.query.list_id;
  var count = req.query.count;
  twitter.getCustomApiCall(
    '/lists/statuses.json',
    {list_id: list_id, count: count, include_entities: false, include_rts: false},
    function(error, response, body){
      treat_error(res, error);
    },
    function(data){
      res.send(helper.get_tweets_by_list(data));
    });
});

function treat_error(res, error){
  res.status(error.statusCode);
  res.send({
      "error" : error.data
  });
}

module.exports = {
  app: app
}

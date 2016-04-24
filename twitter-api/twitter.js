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
      var tw_lists = helper.get_lists_info(data);

      if(tw_lists.length == 0){
        res.status(200);

        res.send({
          "data": tw_lists,
          "twitter_original_data": data
        });

      }else{
        res.send(tw_lists);
      }
    });
});

module.exports = {
  app: app
}

var app = require('./server-config.js').app;
var twitter = require('./twitter-config.js').twitter;

app.get('/twitter/user', function (req, res) {
    var username = req.query.username;
    var data = twitter.getUser({ screen_name: username}, function(error, response, body){
        res.send({
            "error" : error
        });
    }, function(data){
        res.send({
            result : {
                "userData" : data
            }
        });
    });

});
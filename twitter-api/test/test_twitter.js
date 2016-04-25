var assert = require("assert");
var request = require('supertest');
var sinon = require('sinon');

var server = require('../server-config.js').server;
var twitter = require('../twitter-config.js').twitter;
var app = require('../twitter.js').app;

var getCustomApiCall = sinon.stub(twitter, 'getCustomApiCall');

describe('twitter/lists', function(){

  it('should return a name and id for each list from twitter account', function(done){
    var data = '[{"name": "humanos", "id": 230154551}]';
    var expectedResult = [{"name": "humanos", "id": 230154551}];

    getCustomApiCall.callsArgWith(3, data);

    request(server)
    .get('/twitter/lists?username=roselmamendes')
    .expect(200)
    .expect(expectedResult)
    .end(done);

  });

  it('should return the error and message from twitter service', function(done){
    var data = {
      statusCode: 400,
      data: '{"errors":[{"code":215,"message":"Bad Authentication data."}]}'
    };
    var expectedResult = {"error": data.data};

    getCustomApiCall.callsArgWith(2, data);

    request(server)
    .get('/twitter/lists?username=roselmamendes')
    .expect(400)
    .expect(expectedResult)
    .end(done);

  });

  it('should return an empty list and original data which is unreadable', function(done){
    var data = 'teste';
    var expectedResult = {'data': [], 'twitter_original_data': data};

    getCustomApiCall.callsArgWith(3, data);

    request(server)
    .get('/twitter/lists?username=roselmamendes')
    .expect(200)
    .expect(expectedResult)
    .end(done);

  });

});

describe('twitter/lists/tweets', function(){

  it('should return tweets from specific list', function(done){
    var data = '[{"geo":null,"coordinates":null,"place":null,"created_at":"Sun Apr 24 23:08:24 +0000 2016", "id": 45, "text": "alguma coisa", "user": {"id": 73,"screen_name": "fulano"}}]';
    var expectedResult = [{
      "created_at": "Sun Apr 24 23:08:24 +0000 2016",
      "id": 45,
      "text": "alguma coisa",
      "user":
      {
        "id": 73,
        "screen_name": "fulano"
      }
    }];

    getCustomApiCall.callsArgWith(3, data);

    request(server)
    .get('/twitter/lists/tweets?list_id=1&count=2')
    .expect(200)
    .expect(expectedResult)
    .end(done);

  });

  it('should return the error and message from twitter service', function(done){
    var data = {
      statusCode: 400,
      data: '{"errors":[{"code":215,"message":"Bad Authentication data."}]}'
    };
    var expectedResult = {"error": data.data};

    getCustomApiCall.callsArgWith(2, data);

    request(server)
    .get('/twitter/lists/tweets?list_id=1&count=2')
    .expect(400)
    .expect(expectedResult)
    .end(done);

  });

});

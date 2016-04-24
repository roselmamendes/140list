var assert = require("assert");
var request = require('supertest');
var sinon = require('sinon');

var server = require('../server-config.js').server;
var twitter = require('../twitter-config.js').twitter;
var app = require('../twitter.js').app;

describe('twitter/lists', function(){

  var getCustomApiCall = sinon.stub(twitter, 'getCustomApiCall');

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
    .expect({'data': [], 'twitter_original_data': 'teste'})
    .end(done);

  });

});

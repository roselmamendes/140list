var assert = require("assert");
var request = require('supertest');
var sinon = require('sinon');

var server = require('../server-config.js').server;
var twitter = require('../twitter-config.js').twitter;
var app = require('../twitter.js').app;

describe('twitter/lists', function(){

  it('should return a name and id for each list from twitter account', function(done){
    var data = '[{"name": "humanos", "id": 230154551}]';
    var expectedResult = [{"name": "humanos", "id": 230154551}];

    var getCustomApiCall = sinon.stub(twitter, 'getCustomApiCall');
    getCustomApiCall.callsArgWith(3, data);

    request(server)
    .get('/twitter/lists?username=roselmamendes')
    .expect(200)
    .expect(expectedResult)
    .end(done);

  });

});

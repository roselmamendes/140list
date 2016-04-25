var assert = require('assert');
var helper = require('../helper.js');

describe('helper', function(){

  it('get_lists_info should return for each list a name and id', function(){
    data = '[ {"name": "lista1", "id": 1, "url": "url1.com", "user": {"name": "Roselma"}},{"name": "lista2", "id": 2, "url": "url2.com", "user": {"name": "Roselma"}}]';

    expected_list_data = [{"name": "lista1", "id": 1},{"name": "lista2", "id": 2}];

    assert.deepEqual(expected_list_data, helper.get_lists_info(data));
  });

  it('get_lists_info should return an empty list and original data if the string is unreadable', function(){
    data = 'teste';

    assert.deepEqual({"data":[],"twitter_original_data":"teste"},helper.get_lists_info(data));
  });

  it('get_tweets_by_list should return a list of tweets from a twitter list', function(){
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

    assert.deepEqual(expectedResult, helper.get_tweets_by_list(data));
  });

  it('get_tweets_by_list should return an empty list and original data if the string is unreadable', function(){
    data = 'teste';

    assert.deepEqual({"data":[],"twitter_original_data":"teste"},helper.get_tweets_by_list(data));
  });

});

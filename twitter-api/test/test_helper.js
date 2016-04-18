var assert = require('assert');
var helper = require('../helper.js');

describe('lists', function(){
  
  it('get_lists_info should return for each list a name and id', function(){
    data = '[ {"name": "lista1", "id": 1, "url": "url1.com", "user": {"name": "Roselma"}},{"name": "lista2", "id": 2, "url": "url2.com", "user": {"name": "Roselma"}}]';
    
    expected_list_data = [{"name": "lista1", "id": 1},{"name": "lista2", "id": 2}];
    
    assert.deepEqual(helper.get_lists_info(data),expected_list_data)
  });
  
});
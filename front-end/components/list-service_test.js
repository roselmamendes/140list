describe('ListService', function(){
  
  beforeEach(module("List"));

  beforeEach(inject(function(_listService_, _$httpBackend_){
    $service = _listService_;
    $httpBackend = _$httpBackend_;
  }));
  
  it("should get a list of user's lists", function(){
    var expected_data = [{"name": "lista1", "id": 1},{"name": "lista2", "id": 2}];
    $httpBackend.whenGET('http://0.0.0.0:3000/twitter/lists?username=fulano').respond(expected_data);
    
    var actual_lists = $service.getUserLists('fulano');
    $httpBackend.flush();
          
    expect(actual_lists[0].text).toEqual(expectedData[0].text);
    
  });
  
});
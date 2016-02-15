describe('App', function(){

  beforeEach(module('App'));

  var controller;

  beforeEach(inject(function(_$controller_){
    controller = _$controller_;
  }));

  describe("list of user's lists", function(){

    it('get', function(){
      var scope = {};

      controller('app-controller', {$scope: scope});

      expect(['list1','list2']).toEqual(scope.getUserLists());
    });

  });

});

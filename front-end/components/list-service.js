angular.module('List').

service('ListService', function(Restangular){
  var service = {
    getUserLists: function(){
      return ['list1', 'list2'];
    }
  }

  return service;
});

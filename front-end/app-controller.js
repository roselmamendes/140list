angular.module('App').
controller('app-controller', function($scope, ListService){
  $scope.getUserLists = function(){
    return ListService.getUserLists();
  }
});

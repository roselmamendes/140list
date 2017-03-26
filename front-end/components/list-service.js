angular.module('List')

.service('listService', ['$resource', function($resource){
  return $resource('http://localhost:3000/twitter/lists', {}, {query: {method:'GET', params:{username:''}, isArray:true}});
    }
]);

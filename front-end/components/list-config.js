angular.module('List').

config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('http://localhost:3000');
  RestangularProvider.setDefaultHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });
});

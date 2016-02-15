angular.module('List').

config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('https://api.twitter.com/1.1/');
  RestangularProvider.setDefaultHeaders({
    'oauth_consumer_key': 'env-variable',
    'oauth_signature_method':	'HMAC-SHA1',
    'oauth_version':	'1.0'
  });
});

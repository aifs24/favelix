'use strict';

/**
 * @ngdoc function
 * @name favelixApp.controller:WeathersecureCtrl
 * @description
 * # WeathersecureCtrl
 * Controller of the favelixApp
 */
angular.module('favelixApp')
  .controller('WeathersecureCtrl', function($scope, $http) {
    $scope.getWeather = function() {
      var array = $scope.ciudades.split(',');
      var url = 'https://ul0rtg0gmh.execute-api.us-east-1.amazonaws.com/dev/weatherSecure';
      $http({
        method: 'PUT',
        url: url,
        headers: { 'Authorization': localStorage.getItem('token') },
        data: {cities: array}
      })
        .success(function (data) {
          $scope.results = data;
        })
        .error(function (data) {
          console.log(data);
        });
    };

    $scope.login = function(valid) {
      var url = 'https://ul0rtg0gmh.execute-api.us-east-1.amazonaws.com/dev/login';
      var credentials = {
        "username": "goombazo",
        "password": "why"
      };

      credentials.username = valid ? "goombazo" : "lol";

      $http.post(url, credentials)
        .success(function(data) {
          localStorage.setItem("token", data.token);
        })
        .error(function(){
          localStorage.setItem("token", null);
        });
    };
  });

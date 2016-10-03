'use strict';

/**
 * @ngdoc function
 * @name favelixApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the favelixApp
 */
angular.module('favelixApp')
  .controller('WeatherCtrl', function($scope, $http) {
    $scope.getWeather = function() {
      var array = $scope.ciudades.split(',');
      $http.put('https://ul0rtg0gmh.execute-api.us-east-1.amazonaws.com/dev/weatherMultiple', {cities: array})
        .success(function (data) {
          $scope.results = data;
        })
        .error(function (data) {
          console.log(data);
        });
    };
  });

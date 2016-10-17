'use strict';

/**
 * @ngdoc function
 * @name favelixApp.controller:WeatherstatsCtrl
 * @description
 * # WeatherstatsCtrl
 * Controller of the favelixApp
 */
angular.module('favelixApp')
  .controller('WeatherstatsCtrl', function ($scope, $http) {
    $scope.results = [];
    $scope.getStats = function() {
      $scope.results.length = 0;
      var url = 'https://ul0rtg0gmh.execute-api.us-east-1.amazonaws.com/dev/weatherStats';
      $http({
        method: 'GET',
        url: url,
        headers: { 'Authorization': localStorage.getItem('token') }
      }).then(function successCallback(response) {
        for(var index in response.data){
          $scope.results.push({City: index, Temperature: response.data[index]});
        }
      }, function errorCallback() {
        alert("Your login credentials are not authorized to run this API.")
      });
    };

    $scope.login = function(valid) {
      var url = 'https://ul0rtg0gmh.execute-api.us-east-1.amazonaws.com/dev/login';
      var credentials = {
        "username": "alex",
        "password": "test"
      };

      credentials.username = valid ? "alex" : "lol";

      $http.post(url, credentials)
        .success(function(data) {
          localStorage.setItem("token", data.token);
        })
        .error(function(){
          localStorage.setItem("token", null);
        });
    };
  });

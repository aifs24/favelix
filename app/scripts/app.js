'use strict';

/**
 * @ngdoc overview
 * @name favelixApp
 * @description
 * # favelixApp
 *
 * Main module of the application.
 */
angular
  .module('favelixApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/alumno', {
        templateUrl: 'views/alumno.html',
        controller: 'AlumnoCtrl',
        controllerAs: 'alumno'
      })
      .when('/tareas', {
        templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl',
        controllerAs: 'tareas'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .when('/slackEndPoint', {
        templateUrl: 'views/slackendpoint.html',
        controller: 'SlackendpointCtrl',
        controllerAs: 'slackEndPoint'
      })
      .when('/weatherSecure', {
        templateUrl: 'views/weathersecure.html',
        controller: 'WeathersecureCtrl',
        controllerAs: 'weatherSecure'
      })
      .when('/weatherStats', {
        templateUrl: 'views/weatherstats.html',
        controller: 'WeatherstatsCtrl',
        controllerAs: 'weatherStats'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

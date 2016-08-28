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
      .otherwise({
        redirectTo: '/'
      });
  });

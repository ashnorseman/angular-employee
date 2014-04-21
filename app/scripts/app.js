'use strict';

angular
  .module('angularEmployeeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/employee/:eId', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

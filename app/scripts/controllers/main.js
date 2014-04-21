'use strict';

angular.module('angularEmployeeApp')
  .controller('MainCtrl', ['$scope', 'Employee', function ($scope, Employee) {
    $scope.employees = Employee.query();
  }]);

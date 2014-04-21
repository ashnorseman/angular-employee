'use strict';

angular.module('angularEmployeeApp')
  .controller('EmployeeCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {

    $scope.employee = Employee.get({
      eId:$routeParams.eId
    });
  }]);

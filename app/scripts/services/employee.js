'use strict';

angular.module('angularEmployeeApp')
  .factory('Employee', ['$resource', function Employee($resource) {

    return $resource('employee/:eId.json', {}, {

      query: {
        params: {
          eId: 'employees'
        },
        isArray: true
      }
    });
  }]);

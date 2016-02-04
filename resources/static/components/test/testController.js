'use strict';

var testController = angular.module('testController',[]);

testController.controller('firstTestController',['$scope', function($scope) {
    $scope.test = [{"id_ts":"325"},{"name_ts":"TEEEEEESSST"}];
}]);

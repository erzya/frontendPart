'use strict';

var SocProjectApp = angular.module('SocProjectApp', ['ngRoute','ngResource','testApp']);
SocProjectApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo: '/'});
}]);

SocProjectApp.controller('SocProjectController',['$scope','$http', function($scope, $http) {
    console.log("GetHome ctr before  !!!!!!!!!!!!");

    $scope.item = {"name":"Test"};
}]);

/*Factories*/


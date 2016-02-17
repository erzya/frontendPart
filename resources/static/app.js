'use strict';

var SocProjectApp = angular.module('SocProjectApp', ['ngRoute','ngResource','cms_ArchObjectTypeApp']);
SocProjectApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo: '/'});
}]);

SocProjectApp.controller('SocProjectController',['$scope','$http', function($scope, $http) {
    console.log("GetHome ctr before  !!!!!!!!!!!!");

    $scope.item = {"name":"archObjectTypeList"};
}]);

/*Factories*/


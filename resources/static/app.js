'use strict';

var SocProjectApp = angular.module('SocProjectApp', ['ui.router','cmsApp','ngResource']);
SocProjectApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
        url: '/',
        template: '<h1>Hello {{ item.name }}</h1>'
    });
}]);

SocProjectApp.controller('SocProjectController',['$scope','$http', function($scope, $http) {
    console.log("GetHome ctr before  !!!!!!!!!!!!");

    $scope.item = {"name":"archObjectType"};
}]);

/*Factories*/


'use strict';

var SocProjectApp = angular.module('SocProjectApp', ['ui.router','adminApp','ngResource']);
SocProjectApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function($stateProvider, $urlRouterProvider,$locationProvider){
        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: '/',
            template: '<h1>Hello {{ item.name }}</h1>'
        });
    }
]);

SocProjectApp.controller('SocProjectController',['$scope','$http', function($scope, $http) {
    console.log("GetHome ctr before  !!!!!!!!!!!!");

    $scope.item = {"name":"objectType"};
}]);

/*Factories*/


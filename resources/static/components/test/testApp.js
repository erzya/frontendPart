'use strict';

angular.module('testApp',['ngRoute','testController'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/items/Test',
            {
                templateUrl:'/resources/static/components/test/test.jsp',
                controller : 'firstTestController'
            })
        }
    ]);

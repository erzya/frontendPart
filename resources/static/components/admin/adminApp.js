'use strict';

var AdminApp = angular.module('adminApp',['ui.router','admin_ObjectTypeApp'])
    .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('admin', {
            url: '/admin',
            template: '<ui-view></ui-view>'
        });
    }]
);
/*Temp location Factories*/
/*----------------ArchObject------------------*/
AdminApp .factory('ArchObjectFactory',['$resource',function($resource){
    console.log("Before Return    Arch");
    return $resource('resources/static/JSON/archObject/:action/:arch_id.:format',{
        arch_id:'archObjects',
        format: 'json'
    },{
        delete:{method:'POST',params:{action:'del',arch_id:'@arch_id'}},
    });
}]);
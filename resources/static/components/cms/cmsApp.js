'use strict';

var CmsApp = angular.module('cmsApp',['ui.router','cms_ArchObjectTypeApp'])
    .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('cms', {
            url: '/cms',
            template: '<ui-view></ui-view>'
        });
    }]
);
/*Temp location Factories*/
/*----------------ArchObject------------------*/
CmsApp .factory('ArchObjectFactory',['$resource',function($resource){
    console.log("Before Return    Arch");
    return $resource('resources/static/JSON/archObject/:action/:arch_id.:format',{
        arch_id:'archObjects',
        format: 'json'
    },{
        delete:{method:'POST',params:{action:'del',arch_id:'@arch_id'}},
    });
}]);
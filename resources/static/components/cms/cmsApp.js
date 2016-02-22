'use strict';

angular.module('cmsApp',['ui.router','cms_ArchObjectTypeApp'])
    .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('cms', {
            url: '/cms',
            template: '<ui-view></ui-view>'
        });
    }]
);

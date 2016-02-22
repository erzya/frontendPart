'use strict';

angular.module('cms_ArchObjectTypeApp',['ui.router','cms_ArchObjectTypeController'])
    .config(['$stateProvider',function($stateProvider){
        $stateProvider
            .state('cms.archObjectType', {
                url: '/archObjectType',
                template: '<ui-view></ui-view>'
            })
            .state('cms.archObjectType.list', {
                url: '/archObjectTypeList',
                templateUrl: '/resources/static/components/cms/archObjectType/archObjectTypeList.html',
                controller : 'CMS_ArchObjTypeControllerList'
            })
            .state('cms.archObjectType.new', {
                url: '/new',
                templateUrl: '/resources/static/components/cms/archObjectType/archObjectTypeNew.html',
                controller : 'CMS_ArchObjTypeControllerNew'
            })
            .state('cms.archObjectType.del', {
                url: '/del/:objType_id',
                templateUrl: '/resources/static/components/cms/archObjectType/archObjectTypeList.html',
                controller : 'CMS_ArchObjTypeControllerDel'
            })

        /*$routeProvider
            .when('/cms/archObjectTypeList',
            {
                templateUrl:'/resources/static/components/cms/archObjectType/archObjectTypeList.html',
                controller : 'CMS_ArchObjTypeControllerList'
            })
            .when('/cms/archObjectType/new',
            {
                templateUrl:'/resources/static/components/cms/archObjectType/archObjectTypeNew.html',
                controller : 'CMS_ArchObjTypeControllerNew'
            })
            .when('/cms/archObjectType/del/:objType_id',
            {
                templateUrl:'/resources/static/components/cms/archObjectType/archObjectTypeList.html',
                controller : 'CMS_ArchObjTypeControllerDel'
            })*/
        }
    ]);

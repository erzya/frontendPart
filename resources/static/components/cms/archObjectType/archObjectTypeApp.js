'use strict';

angular.module('cms_ArchObjectTypeApp',['ngRoute','cms_ArchObjectTypeController'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
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
            })
        }
    ]);

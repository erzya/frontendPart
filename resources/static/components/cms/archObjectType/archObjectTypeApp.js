'use strict';

angular.module('cms_ArchObjectTypeApp',['ngRoute','cms_ArchObjectTypeController'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/cms/archObjectType',
            {
                templateUrl:'/resources/static/components/cms/archObjectType/archObjectTypeList.jsp',
                controller : 'CMS_ArchObjTypeControllerList'
            })
            .when('/cms/archObjectType/new',
            {
                templateUrl:'/resources/static/components/cms/archObjectType/archObjectTypeNew.jsp',
                controller : 'CMS_ArchObjTypeControllerNew'
            })
        }
    ]);

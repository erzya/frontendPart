'use strict';

var ArchObjectTypeApp = angular.module('cms_ArchObjectTypeApp',['ui.router', 'ui.bootstrap','cms_ArchObjectTypeController']);

ArchObjectTypeApp.provider('modalState', ['$stateProvider', function($stateProvider) {
    var provider = this;
    this.$get = function() {
        return provider;
    }
    this.state = function(stateName, options) {
        var modalInstance;
        $stateProvider.state(stateName, {
            url: options.url,
            onEnter: ['$uibModal', '$state', function($modal, $state) {
                modalInstance = $modal.open(options);
                modalInstance.result['finally'](function() {
                    modalInstance = null;
                    if ($state.$current.name === stateName) {
                        $state.go('^');
                    }
                });
            }],
            onExit: function() {
                if (modalInstance) {
                    modalInstance.close();
                }
            }
        });
     };
  }
]);

ArchObjectTypeApp.config(['$stateProvider', 'modalStateProvider',  function($stateProvider, modalStateProvider){
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
            .state('cms.archObjectType.del', {
                url: '/del/:objType_id',
                templateUrl: '/resources/static/components/cms/archObjectType/archObjectTypeList.html',
                controller : 'CMS_ArchObjTypeControllerDel'
            });

         modalStateProvider.state('cms.archObjectType.list.new', {
    	    url: '/new',
            templateUrl: '/resources/static/components/cms/archObjectType/archObjectTypeNew.html',
            controller : 'CMS_ArchObjTypeControllerNew',
    	    data: {
    	      roles: []
    	    }             
	 });
         modalStateProvider.state('cms.archObjectType.list.edit', {
    	    url: '/new',
            templateUrl: '/resources/static/components/cms/archObjectType/archObjectTypeNew.html',
            controller : 'CMS_ArchObjTypeControllerNew',
    	    data: {
    	      roles: []
    	    }             
	 });
}]);
/*Factories*/
/*----------------ArchObjectType------------------*/
ArchObjectTypeApp.factory('ArchObjectTypeFactory',['$resource',function($resource){
    console.log("Before Return    Arch");
    return $resource('resources/static/JSON/archObjectType/:action/:objType_id.:format',{
        objType_id:'archObjectTypes',
        format: 'json'
    },{
        delete:{method:'POST',params:{action:'del',objType_id:'@objType_id'}},
    });
}]);

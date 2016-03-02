'use strict';

var ObjectTypeApp = angular.module('admin_ObjectTypeApp',['ui.router', 'ui.bootstrap','admin_ObjectTypeController']);

ObjectTypeApp.provider('modalState', ['$stateProvider', function($stateProvider) {
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

ObjectTypeApp.config(['$stateProvider', 'modalStateProvider',  function($stateProvider, modalStateProvider){
        $stateProvider
            .state('admin.objectType', {
                url: '',
                template: '<ui-view></ui-view>'
            })
            .state('admin.objectType.list', {
                url: '/objectTypeList',
                templateUrl: '/resources/static/components/admin/objectType/objectTypeList.html',
                controller : 'ObjTypeControllerList'
            })
            .state('admin.objectType.del', {
                url: '/objectTypeList/del/:objType_id',
                templateUrl: '/resources/static/components/admin/objectType/objectTypeList.html',
                controller : 'ObjTypeControllerDel'
            });

         modalStateProvider.state('admin.objectType.list.new', {
    	    url: '/new',
            templateUrl: '/resources/static/components/admin/objectType/objectTypeNew.html',
            controller : 'ObjTypeControllerNew',
    	    data: {
    	      roles: []
    	    }             
	 });
         modalStateProvider.state('admin.objectType.list.edit', {
    	    url: '/new',
            templateUrl: '/resources/static/components/admin/objectType/objectTypeNew.html',
            controller : 'ObjTypeControllerNew',
    	    data: {
    	      roles: []
    	    }             
	 });
}]);
/*Factories*/
/*----------------ObjectType------------------*/
ObjectTypeApp.factory('ObjectTypeFactory',['$resource',function($resource){
    console.log("Before Return    Arch");
    return $resource('resources/static/JSON/objectType/:action/:objType_id.:format',{
        objType_id:'objectTypes',
        format: 'json'
    },{
        delete:{method:'POST',params:{action:'del',objType_id:'@objType_id'}},
    });
}]);

'use strict';

var ObjectTypeApp = angular.module('admin_ObjectTypeApp', ['ui.router', 'ui.bootstrap', 'admin_ObjectTypeController']);

ObjectTypeApp.provider('modalState', ['$stateProvider', function ($stateProvider) {
    var provider = this;
    this.$get = function () {
        return provider;
    }
    this.state = function (stateName, options) {
        var modalInstance;
        $stateProvider.state(stateName, {
            url: options.url,
            onEnter: ['$uibModal', '$state', function ($modal, $state) {
                modalInstance = $modal.open(options);
                modalInstance.result['finally'](function () {
                    modalInstance = null;
                    if ($state.$current.name === stateName) {
                        $state.go('^');
                    }
                });
            }],
            onExit: function () {
                if (modalInstance) {
                    modalInstance.close();
                }
            }
        });
    };
}
]);

ObjectTypeApp.config(['$stateProvider', 'modalStateProvider', function ($stateProvider, modalStateProvider) {
    $stateProvider
        .state('admin.objectType', {
            url: '/object-types',
            templateUrl: '/resources/static/components/admin/objectType/objectTypeList.html',
            controller: 'ObjTypeControllerList'
        })
        .state('admin.objectType.del', {
            url: '/objectTypeList/del/:objType_id',
            templateUrl: '/resources/static/components/admin/objectType/objectTypeList.html',
            controller: 'ObjTypeControllerDel'
        });

    modalStateProvider.state('admin.objectType.new', {
        url: '/new',
        templateUrl: '/resources/static/components/admin/objectType/objectTypeEdit.html',
        controller: 'ObjTypeControllerEdit',
        data: {
            roles: []
        }
    });
    modalStateProvider.state('admin.objectType.edit', {
        url: '/edit/{id}',
        templateUrl: '/resources/static/components/admin/objectType/objectTypeEdit.html',
        controller: 'ObjTypeControllerEdit',
        data: {
            roles: []
        }
    });
}]);
/*Factories*/
/*----------------ObjectType------------------*/
ObjectTypeApp.factory('ObjectTypeFactory', ['$resource', function ($resource) {
    console.log("Before Return    Arch");

    var objectTypes = [];
    var maxId = 1;

    /*return $resource('resources/static/JSON/objectType/:action/:objType_id.:format',{
     objType_id:'objectTypes',
     format: 'json'
     },{
     delete:{method:'POST',params:{action:'del',objType_id:'@objType_id'}},
     });*/
    return {
        get: function () {
            return objectTypes;
        },
        save: function (objectType) {
            if(objectType.id  == 0) {
                objectType.id = maxId;
                maxId++;
                objectTypes.push(objectType);
            }
        },
        find: function (id) {
            for (var i = 0; i < objectTypes.length; i++) {
                if (objectTypes[i].id == id) {
                    return objectTypes[i];
                }
            }

            return null;
        }
    }
}]);

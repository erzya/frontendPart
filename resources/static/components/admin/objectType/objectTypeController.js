'use strict';

var admin_ObjectTypeController = angular.module('admin_ObjectTypeController',[]);

admin_ObjectTypeController.controller('ObjTypeControllerList',['$scope','ObjectTypeFactory',
    function($scope,ObjectTypeFactory) {
        $scope.tableName="Тип архитектурного объекта";
        $scope.listObjTypes = ObjectTypeFactory.query();
    }
]);
/*admin_ObjectTypeController.controller('ObjectTypeController',['$scope','$stateParams','ObjectTypeFactory',
    function($scope, $stateParams, ObjectTypeFactory) {
        console.log("id    ",  $stateParams.objType_id);
        ObjectTypeFactory.get({objType_id: $stateParams.objType_id, format: 'json'}, function(data){
            console.log("data    ",  data);
            $scope.ObjType = data;
        })
}]);*/

admin_ObjectTypeController.controller('ObjTypeControllerNew',['$scope','$state','ObjectTypeFactory','ArchObjectFactory',
    function($scope,$state,ObjectTypeFactory,ArchObjectFactory) {
        $scope.tableName="Создание нового типа архитектурного объекта";
        $scope.archObjectList = ArchObjectFactory.query();
        $scope.listObjTypes = ObjectTypeFactory.query();
        $scope.saveObjType = function(){
            console.log("name    ", $scope.typeObj.name);
            console.log("parent    ", $scope.typeObj.parent);
            console.log("archObjs    ", $scope.typeObj.archObjects);
            /*ObjectFactory.save({action:'new'},$scope.typeObj)
                .$promise.then(
                //success
                function( value ){
                    $state.go("admin.objectType.list");
                },
                //error
                function( error ){
                    alert(error);
                });*/
        }
    }
]);

admin_ObjectTypeController.controller('ObjTypeControllerDel',['$scope','$stateParams','$state','ObjectTypeFactory',
    function($scope, $stateParams,$state,ObjectTypeFactory) {
        console.log("id    ", $stateParams.objType_id);
        $state.go("admin.objectType.list");
       /* ObjectTypeFactory.delete({objType_id: $routeParams.objType_id})
            .$promise.then(
                function( value ){
                    $state.go("admin.objectType.list");
                },
                function( error ){
                    alert(error);
                });*/
    }
]);
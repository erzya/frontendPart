'use strict';

var cms_ArchObjectTypeController = angular.module('cms_ArchObjectTypeController',[]);

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerList',['$scope','ArchObjectTypeFactory',
    function($scope,ArchObjectTypeFactory) {
        $scope.tableName="Тип архитектурного объекта";
        $scope.listArchObjTypes = ArchObjectTypeFactory.query();
}]);
/*cms_ArchObjectTypeController.controller('CMS_ArchObjectTypeController',['$scope','$stateParams','ArchObjectTypeFactory',
    function($scope, $stateParams, ArchObjectTypeFactory) {
        ArchObjectTypeFactory.get({objType_id: $stateParams.objType_id}, function(data){
            $scope.archObjType = data;
        })
}]);*/

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerNew',['$scope','ArchObjectTypeFactory','ArchObjectFactory',
    function($scope,ArchObjectTypeFactory,ArchObjectFactory) {
        $scope.tableName="Создание нового типа архитектурного объекта";
        $scope.archObjectList = ArchObjectFactory.query();
        $scope.listArchObjTypes = ArchObjectTypeFactory.query();
        $scope.saveArchObjType = function(){
            console.log("name    ", $scope.archTypeObj.name);
            console.log("parent    ", $scope.archTypeObj.parent);
            console.log("archObjs    ", $scope.archTypeObj.archObjects);
        }
    }
]);

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerDel',['$scope','$stateParams','$state','ArchObjectTypeFactory',
    function($scope, $stateParams,$state,ArchObjectTypeFactory) {
        console.log("id    ", $stateParams.objType_id);
        $state.go("cms.archObjectType.list");
       /* ArchObjectTypeFactory.delete({objType_id: $routeParams.objType_id})
            .$promise.then(
                function( value ){
                    $location.path('/cms/archObjectType/archObjectTypeList');
                },
                function( error ){
                    alert(error);
                });*/
    }
]);
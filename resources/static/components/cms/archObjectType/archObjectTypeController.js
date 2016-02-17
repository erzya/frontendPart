'use strict';

var cms_ArchObjectTypeController = angular.module('cms_ArchObjectTypeController',[]);
var archObjectListMock =[{"arch_id":1,"name":"колонна","description":"высокая","constructingDate":"10/10/2010"}
                    , {"arch_id":2,"name":"урна","description":"широкая","constructingDate":"01/11/2005"}
                    , {"arch_id":3,"name":"балясина","description":"толстая","constructingDate":"10/10/1950"}
                    ,{"arch_id":4,"name":"Крест","description":"православный","constructingDate":"10/10/2010"}
                    , {"arch_id":5,"name":"орган","description":"не православный","constructingDate":"01/11/2005"}
                    , {"arch_id":6,"name":"столб","description":"стоит","constructingDate":"10/10/1950"}];


//--------------------------
var archObjectList1 = [[{"arch_id":1,"name":"колонна","description":"высокая","constructingDate":"10/10/2010"}
                        , {"arch_id":2,"name":"урна","description":"широкая","constructingDate":"01/11/2005"}
                        , {"arch_id":3,"name":"балясина","description":"толстая","constructingDate":"10/10/1950"}]
                       ,[{"arch_id":4,"name":"Крест","description":"православный","constructingDate":"10/10/2010"}
                        , {"arch_id":5,"name":"орган","description":"не православный","constructingDate":"01/11/2005"}
                        , {"arch_id":6,"name":"столб","description":"стоит","constructingDate":"10/10/1950"}]];


//------------------------------------
var arrTypeMock = [{"objType_id":1,"name":"Доходный дом", "parent":"квартал","archObjects":archObjectList1[0]}
                    ,{"objType_id":2,"name":"Собор", "parent":"квартал","archObjects":archObjectList1[1]}];
//------------------------------------
cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerList',['$scope', function($scope) {
    $scope.tableName="Тип архитектурного объекта";
    $scope.listArchObjTypes = arrTypeMock;
}]);

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerNew',['$scope', function($scope) {
    $scope.tableName="Создание нового типа архитектурного объекта";
    $scope.archObjectList = archObjectListMock;
    $scope.listArchObjTypes = arrTypeMock;
    $scope.listType = [{"type_id":1,"name":"квартал"},{"type_id":2,"name":"район"},{"type_id":3,"name":"дом"},{"type_id":4,"name":"помещение"}];
    $scope.saveArchObjType = function(){
        console.log("name    ", $scope.archTypeObj.name);
        console.log("parent    ", $scope.archTypeObj.parent);
        console.log("archObjs    ", $scope.archTypeObj.archObjects);
    }
}]);

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerDel',['$scope','$routeParams','$location',
    function($scope, $routeParams,$location) {
        console.log("id    ", $routeParams.objType_id);
        $location.path('/cms/archObjectTypeList');
}]);
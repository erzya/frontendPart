'use strict';

var cms_ArchObjectTypeController = angular.module('cms_ArchObjectTypeController',[]);
var archObjectListMock =[{"id_arch":1,"name":"колонна","description":"высокая","constructingDate":"10/10/2010"}
                    , {"id_arch":2,"name":"урна","description":"широкая","constructingDate":"01/11/2005"}
                    , {"id_arch":3,"name":"балясина","description":"толстая","constructingDate":"10/10/1950"}
                    ,{"id_arch":4,"name":"Крест","description":"православный","constructingDate":"10/10/2010"}
                    , {"id_arch":5,"name":"орган","description":"не православный","constructingDate":"01/11/2005"}
                    , {"id_arch":6,"name":"столб","description":"стоит","constructingDate":"10/10/1950"}];

var archObjectList1 = [[{"id_arch":1,"name":"колонна","description":"высокая","constructingDate":"10/10/2010"}
                        , {"id_arch":2,"name":"урна","description":"широкая","constructingDate":"01/11/2005"}
                        , {"id_arch":3,"name":"балясина","description":"толстая","constructingDate":"10/10/1950"}]
                       ,[{"id_arch":4,"name":"Крест","description":"православный","constructingDate":"10/10/2010"}
                        , {"id_arch":5,"name":"орган","description":"не православный","constructingDate":"01/11/2005"}
                        , {"id_arch":6,"name":"столб","description":"стоит","constructingDate":"10/10/1950"}]];


var arrTypeMock = [{"id_arch_type":1,"name":"Доходный дом", "parent":"квартал","archObjects":archObjectList1[0]}
                    ,{"id_arch_type":1,"name":"Сабор", "parent":"квартал","archObjects":archObjectList1[1]}];

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerList',['$scope', function($scope) {
    $scope.tableName="Тип архитектурного объекта";
    $scope.listArchObjTypes = arrTypeMock;
}]);

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerNew',['$scope', function($scope) {
    $scope.tableName="Создание нового типа архитектурного объекта";
    $scope.archObjectList = archObjectListMock;
    $scope.listArchObjTypes = arrTypeMock;
    $scope.listType = [{"id":1,"name":"квартал"},{"id":2,"name":"район"},{"id":3,"name":"дом"},{"id":4,"name":"помещение"}];
    $scope.saveArchObjType = function(){
        console.log("name    ", $scope.archTypeObj.name);
        console.log("parent    ", $scope.archTypeObj.parent);
        console.log("archObjs    ", $scope.archTypeObj.archObjects);
    }
}]);

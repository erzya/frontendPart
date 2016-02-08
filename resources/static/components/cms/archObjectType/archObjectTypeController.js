'use strict';

var cms_ArchObjectTypeController = angular.module('cms_ArchObjectTypeController',[]);

var arrTypeMock = [{"name":"Доходный дом", "parent":"квартал","archObjects":
                                                                            [{"name":"колонна","description":"высокая","constructingDate":"10/10/2010"}
                                                                                , {"name":"урна","description":"широкая","constructingDate":"01/11/2005"}
                                                                                , {"name":"балясина","description":"толстая","constructingDate":"10/10/1950"}]}
                                                                            ,{"name":"Сабор", "parent":"квартал","archObjects":
                                                                                [{"name":"Крест","description":"православный","constructingDate":"10/10/2010"}
                                                                                    , {"name":"орган","description":"не православный","constructingDate":"01/11/2005"}
                                                                                    , {"name":"столб","description":"стоит","constructingDate":"10/10/1950"}]}];

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerList',['$scope', function($scope) {
    $scope.tableName="Тип архитектурного объекта";
    $scope.listArchObjTypes = arrTypeMock;
}]);

cms_ArchObjectTypeController.controller('CMS_ArchObjTypeControllerNew',['$scope', function($scope) {
    $scope.tableName="Создание нового типа архитектурного объекта";
    $scope.listArchObjTypes = arrTypeMock;
    $scope.saveArchObjType = function(){
        console.log("listSize    ", $scope.listArchObjTypes.length);
    }
}]);

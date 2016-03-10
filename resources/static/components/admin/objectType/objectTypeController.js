'use strict';

var admin_ObjectTypeController = angular.module('admin_ObjectTypeController', []);

admin_ObjectTypeController.controller('ObjTypeControllerList', ['$scope', 'ObjectTypeFactory',
    function ($scope, ObjectTypeFactory) {
        $scope.tableName = "Тип архитектурного объекта";

        $scope.objTypes = [];

        //$scope.listObjTypes = ObjectTypeFactory.query();
        $scope.$watch(
            function () {
                return ObjectTypeFactory.get();
            }, function (value) {
                $scope.objTypes = value;
            });

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

admin_ObjectTypeController.controller('ObjTypeControllerEdit', ['$scope', '$state', 'ObjectTypeFactory', '$stateParams',
    function ($scope, $state, ObjectTypeFactory, $stateParams) {

        if ($stateParams.id) {
            $scope.typeObj = ObjectTypeFactory.find($stateParams.id)
        } else {
            $scope.typeObj = { 'id' : 0};
        }

        $scope.close = function () {
            $state.go('^');
        };

        $scope.saveObjType = function () {
            ObjectTypeFactory.save($scope.typeObj);

            $scope.close();
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


admin_ObjectTypeController.controller('ObjTypeControllerDel', ['$scope', '$stateParams', '$state', 'ObjectTypeFactory',
    function ($scope, $stateParams, $state, ObjectTypeFactory) {
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
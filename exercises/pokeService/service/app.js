var app = angular.module("ServiceApp", []);
app.controller("MainCtrl", ["$scope", "someService", function ($scope, someService) {

    $scope.addition = function (glib){
        $scope.poo = someService.add(glib);
        
    } 
    
    
}]);


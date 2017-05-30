var app = angular.module("warmupApp", []);

app.controller("MainCtrl", ["$scope", function($scope) {
//    $scope.sum = function() {
//        console.log($scope.num1 + $scope.num2);
    
    $scope.stuff = [1,2,3,4,5,6,7,8,9];
    }
        
//    $scope.person = {
//        firstName: "Dan",
//        lastName: "Hitt"
//    }
    
//    $scope.isAdmin = true;
//    
//    $scope.checkGender = function() {
//        console.log($scope.gender);
//    }
    
}]);

//app.controller("SecondCtrl", ["$scope", function($scope) {
//    $scope.name = "Jill";
//    $scope.multiply = function() {
//        $scope.result = $scope.num1 * $scope.num2;
//    }
    
}]);
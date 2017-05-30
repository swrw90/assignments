var app = angular.module("MyApp", []);
app.controller("mainCtrl", ["$scope", function ($scope) {

    $scope.userInfo = [];
    $scope.submit = function (user) {
        $scope.userInfo.push(user);
    };
    $scope.user = {};
 
}]);

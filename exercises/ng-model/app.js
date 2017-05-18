var app = angular.module("MyApp", []);
app.controller("MyCtrl", ["$scope", function ($scope) {

    $scope.guitar = {
        year: 1965,
        brand: "fender",
        model: "telecaster"
    }

}]);

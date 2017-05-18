var app = angular.module("MyApp", []);
app.controller("MyCtrl",["$scope", function ($scope) {
    $scope.guitar = "Black 1965 Fender Telecaster";
    
}]);



//
//
//
//
//    $scope.guitar = function guitar(color, year, brand, model) {
//        this.color = color;
//        this.year = year;
//        this.brand = brand;
//        this.model = model;
//        
//    }
//
//    var myGuitar = ("Black", 1965, "Fender", "Telecaster");

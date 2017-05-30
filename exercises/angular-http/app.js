var app = angular.module("warmupApp", []);

app.controller("MainCtrl", ["$scope", "$http", function($scope, $http) {

    $http.get("http://swapi.co/api/starships/9").then(function(response) {
        $scope.starship = response.data;
        console.log(response.data);
//        $scope.starship.totalPopulation = parseInt($scope.starship.passengers) + parseInt($scope.starship.crew);
    });
    
    console.log("Outside the $http request");
    
}]);

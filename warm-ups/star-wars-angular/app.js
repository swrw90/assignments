var app = angular.module("starWars", []);
app.controller("mainCtrl", ["$scope", "StarWarsService", function ($scope, StarWarsService) {

    StarWarsService.getStarWarsOpening().then(function (response){
      $scope.opening = response.data; 
       
    });

}]);


app.service("StarWarsService", ["$http", function ($http) {
    this.getStarWarsOpening= function(){
        return $http.get("http://swapi.co/api/films/1/");
        
    };

}]);









//var app = angular.module("warmupApp", []);
//
//app.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
//
//    $http.get("http://swapi.co/api/starships/9").then(function (response) {
//        $scope.starship = response.data;
//        console.log(response.data);
//        //        $scope.starship.totalPopulation = parseInt($scope.starship.passengers) + parseInt($scope.starship.crew);
//    });
//
//    console.log("Outside the $http request");
//
//}]);

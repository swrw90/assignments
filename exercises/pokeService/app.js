var app = angular.module("pokeList", []);
app.controller("MainCtrl", ["$scope", "pokeService", function ($scope, pokeService) {

    $scope.pokemon = pokeService.pokemon;
    $scope.addPoke = function (inputPoke) {
        pokeService.addPoke(inputPoke);
    };
    $scope.delPoke = function (name) {
        pokeService.delPoke(name);
    }

}]);


app.service("pokeService", [function () {

    this.pokemon = [];
    this.addPoke = function (inputPoke) {
        this.pokemon.push(inputPoke);
    };
    this.delPoke = function (name) {
      this.pokemon.splice(this.pokemon.indexOf(name), 1);  
    };
  }]);

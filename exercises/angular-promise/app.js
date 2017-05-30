var app = angular.module("warmupApp", []);

app.controller("MainCtrl", ["$scope", "$http", "$StarWarsService", function($scope, $http, $StarWarsService) {
          
    $http.get("http:swapi.co/api/people").then(function(response){
        console.log(response);
        $scope.luke = response.data;
    }, function(response) {
        
    })
            }]);



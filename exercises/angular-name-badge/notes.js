var app = angular.module(myApp, []);
app.controller("mainCtrl", ["$scope", function($scope){
$scope.test = "test";
$scope.fruit = {category: "fruit",
              apples: {
                  ["green apple", "red delicious", "granny smith"], 
              },
                tomatoes: {
                    ["cherry", "roma", "beefsteak"]
                },
               }
}]);  
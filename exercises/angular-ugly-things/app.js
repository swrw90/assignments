var app = angular.module("uglyThings", []);
app.controller("MainCtrl", ["$scope", function ($scope) {

            $scope.uglyThings = [];
            $scope.createUglyThings = function (uglyThing) {

                var newUglyThing = {
                    title: uglyThing.title,
                    imgUrl: uglyThing.imgUrl,
                    description: uglyThing.description
                };
                $scope.uglyThings.push(newUglyThing);
                
                $scope.uglyThing = {};
            }}]);




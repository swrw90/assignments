//var app = angular.module("myApp", []);
//app.controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {
//
//    $scope.http;
//    $http.get("http://pokeapi.co/api/v1/pokemon/1").then(function (response) {
//        console.log(response.data);
//        $scope.http = response.data;
//    });
//
//
//}]);


/*Post Request*/

var app = angular.module("myApp", []);
app.controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {

                $scope.http;
                $http.get("http://pokeapi.co/api/v1/pokemon/1").then(function (response) {
                    console.log(response.data);

                    //        $scope.http = response.data;
                    //    });

                    $scope.submit = function (user) {
                        $http.post("/someurl", dataToBePosted).then(function (response) {
                            //do stuff with response.data
                        });
                    }

                }]);

app.service("httpService", ["http", function ($http) {
                this.getRequest = function (url) {
                    $http.get(url).then(function (response) {
                            return response.data;
                        },
                        function (response) {
                            return response;
                        })
                }

}]);



    /*$scope is the object that lets us see things on the html page.
    service is like a mini controller outside of the scope

var app = angular.module("MusicPlayer", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "",
            controller: ""
        })
        .when("//:id", {
            templateUrl: "",
            controller: ""
        });
}]);

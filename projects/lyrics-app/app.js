var app = angular.module("lyricsApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html"
        })
        .when("/lyrics", {
            templateUrl: "components/lyrics/lyrics.html",
            controller: "LyricCtrl"
        })
        .when("/about", {
            templateUrl: "components/about/about.html",
        })
    .otherwise({redirectTo: "components/home/home.html"});
}]);

var app = angular.module("myApp");

app.service("httpService", ["$http", function ($http) {
    this.getList = function (x) {
        return $http.get("http://swapi.co/api/people/")
    };
}]);

const farenheit = "°F";
const celcius = "°C";
const kelvin = "°K";
var app = angular.module("app", []);
app.controller("MainCtrl", ["$scope", "$http", "tempService", function ($scope, $http, tempService) {
        $scope.temps = [10, 15, 20, 25, 30];
        $scope.degrees = [farenheit, celcius, kelvin];
        tempService.getTemp().then(function (weatherData) {
            $scope.weather = weatherData.data.currently.temperature;
        });

    }
]);

app.filter("convert", function () {
    return function (input, tempSymbol) {
        if (tempSymbol === farenheit) {
            return input + " " + farenheit
        } else if (tempSymbol === celcius) {
            return (input - 32) * .5556 + " " + celcius
        } else if (tempSymbol === kelvin) {
            return (input - 32) * .5556 + 273.15
        }
    };
})

app.service("tempService", function ($http) {
    this.getTemp = function () {
        return $http.jsonp("https://api.darksky.net/forecast/c39912b2a246112cb8f52955e6c5fd8a/40.570041,-111.887768?callback=JSON_CALLBACK");
    }
})

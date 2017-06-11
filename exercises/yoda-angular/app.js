var app = angular.module("yodaSpeak", []);
app.controller("MainCtrl", ["$scope", "httpService", function ($scope, httpService) {

    $scope.yodaTranslator = function (yodaTranslate) {
        httpService.getYodaSpeak(yodaTranslate).then(function (response) {
            $scope.yodaSpeak = response.data;
            
        });
    }
}]);



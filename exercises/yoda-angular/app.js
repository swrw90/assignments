var app = angular.module("yodaSpeak", []);
app.controller("MainCtrl", ["$scope", "YodaSpeakService", function ($scope, YodaSpeakService) {

    $scope.yodaTranslator = function (yodaTranslate) {
        YodaSpeakService.getYodaSpeak(yodaTranslate).then(function (response) {
            $scope.yodaSpeak = response.data;

        });
    }
}]);


app.service("YodaSpeakService", ["$http", function ($http) {
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    this.getYodaSpeak = function (msgToBeTranslated) {
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + msgToBeTranslated, config);

    };

}]);

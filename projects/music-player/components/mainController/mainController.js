var app = angular.module("MusicPlayer", ['ngAudio']);
app.controller("MainCtrl", ["$scope", "$http", "audioService", function ($scope, $http, audioService) {
    $scope.data = {}
    $scope.getSomething = function () {
        (audioService.getAudio()).then(function (response) {
            $scope.data = (response.data);
            console.log(response.data);
        })
    }
    }]);

var app = angular.module("lyricsApp");
app.controller("LyricCtrl", ["$scope", "lyricsService", function ($scope, lyricsService) {

    $scope.fetchLyrics = function (artist, song) {
        lyricsService.getLyrics(artist, song).then(function (response) {
            $scope.lyrics = response.data.lyrics_body;
        });
    };
    }]);


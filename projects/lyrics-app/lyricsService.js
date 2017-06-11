var app = angular.module("lyricsApp");

app.service("lyricsService", ["$http", function ($http) {

    $http.defaults.headers.common["X-Mashape-Key"] = "JGCwt44xFQmshMkQ9CWCMsH4zveEp1GiKcgjsn0xjaJUQtXiQM"

    this.getLyrics = function (artist, song) {
        return $http.get("https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist=" + artist.replace(/\s/g, '') + "&q_track=" + song.replace(/\s/g, ''))
    };
}]);

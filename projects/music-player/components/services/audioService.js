var app = angular.module("MusicPlayer");

app.service("audioService", ["$http", "$sce", function ($http, $sce) {
    this.callback = function () {
        console.log("hey baby");
    }
    

    
    this.getAudio = function () {
        var url = "https://api.spotify.com"
        $sce.trustAsResourceUrl(url);

        $http.jsonp(url, {
                jsonpCallbackParam: 'callback'
            })
            .success(function (data) {
                console.log(data.found);
            }
        );
    }
}]);

//ng-file upload
//

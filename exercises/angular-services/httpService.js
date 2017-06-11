var app = angular.module("myApp");

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
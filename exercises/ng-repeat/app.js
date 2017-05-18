var app = angular.module("MyApp", []);
app.controller("MyCtrl", ["$scope", function ($scope) {

    $scope.player = {
        kills: [
            {
                handle: "swrw90",
                rank: 420,
                clan: ["Suke", "Pizza"]
            },
            {
                handle: "dragonbobz",
                rank: 83655,
                clan: ["asdf", "sputnik", "peoplesrepublic"]
        },
            {
                handle: "joeschmoe",
                rank: 9274,
                clan: ["hpburner200", "sputnik", "sololobo21"]
        },
            {
                handle: "sarz",
                rank: 10,
                clan: ["peoplesrepublic", "asdf", "sololobo21"]
        },
            {
                handle: "zikamademethisway",
                rank: 9580,
                clan: ["hpburner200", "peoplesrepublic", "asdf"]
        }
        ]
    }

}]);

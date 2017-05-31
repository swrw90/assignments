var app = angular.module("MightyClicker", []);
app.controller("MainCtrl", ["$scope", "blueService", "redService", function ($scope, blueService, redService) {

    $scope.blueScore = blueService.score;
    $scope.redScore = redService.score;

    $scope.scoreboard1 = function () {
        $scope.blueScore = blueService.increment();
        $scope.redScore = redService.decrement();

        if ($scope.blueScore < 0) {
            $scope.blueScore = blueService.reset();
        } else if ($scope.redScore < 0) {
            $scope.redScore = redService.reset();
        }

    };

    $scope.scoreboard2 = function () {
        $scope.redScore = redService.increment();
        $scope.blueScore = blueService.decrement();

        if ($scope.blueScore < 0) {
            $scope.blueScore = blueService.reset();
        } else if ($scope.redScore < 0) {
            $scope.redScore = redService.reset();
        }
    };

}]);

//blueService will increase by one and reService will decrease by one 
app.service("blueService", function () {
    this.score = 100;
    this.increment = function () {
        return this.score++;
    }
    this.decrement = function () {
        return this.score--;
    }
    this.reset = function () {
        return this.score = 100;
    }

});

//redService will increase by one and blue decrease by one
app.service("redService", function () {
    this.score = 100;
    this.increment = function () {
        return this.score++;
    }
    this.decrement = function () {
        return this.score--;
    }
    this.reset = function () {
        return this.score = 100;
    }

});

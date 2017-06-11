var app = angular.module("bountyApp", []);
app.controller("MainCtrl", ["$scope", "bountyService", function ($scope, bountyService) {

    bounties();
    $scope.activateService = function (item) {
        bountyService.getBounties(item).then(function () {
            bounties();
        });
    };

    // Fetches bounties
    function bounties() {
        bountyService.getBounties().then(function (response) {
            $scope.bountyList = response.data;
        })
    };

    // Adds new bounty to the bounty list.
    $scope.bountyAdd = function (item) {
        bountyService.addBounty(item).then(function (response) {
            bounties()
        });
    };

    //Removes bounty from bounty list.
    $scope.deleteBounty = function (item) {
        httpService.removeBounty(item).then(function () {
            bounties();
        });
    };
  }]);

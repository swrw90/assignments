var app = angular.module("bountyApp");
const apiString = "http://localhost:8080/bounties"

app.service("bountyService", ["$http", function ($http) {

    this.getBounties = function () {
        return $http.get(apiString)
    };
    this.addBounty = function (item) {
        return $http.post(apiString, item)
    };

    this.updateBounty = function (id, item) {
        return $http.put(apiString + id, item)
    };

    this.removeBounty = function (item) {
        return $http.delete(apiString + item._id)
    };
}]);

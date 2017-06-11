var app = angular.module("myApp", []);

app.controller("MainCtrl", ["$scope", "httpService", function ($scope, httpService) {

    
    
    $scope.fetchList = function(x) {
        httpService.getList(x).then(function (response) {
            console.log(response)
//            $scope.peopleList = response.data;
        });
    };


}]);

var app = angular.module("moreServices", []);
app.controller("MainCtrl", ["$scope", "cartoonList", function ($scope, cartoonList) {

    $scope.createCartoon = function (cartoon) {
        cartoonList.addCartoon(cartoon);
        $scope.toonies = cartoonList.cartoons;
        $scope.cartoon = {}
    };
                            }]);

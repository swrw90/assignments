var app = angular.module("WishList");
app.directive("navbar", function () {
    return {
        templateUrl: "components/navbar/navbar.html",
        restrict: "E"
    };
});
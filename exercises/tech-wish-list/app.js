var app = angular.module("WishList", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/wishlist", {
            templateUrl: "components/wishlist/wishlist.html",
            controller: "wishlist"
        })
        .when("/moreTech", {
            templateUrl: "components/moreTech/moreTech.html",
        controller: "moreTech"
        })
        .otherwise({
            redirectTo: "/wishlist"
        });
}]);
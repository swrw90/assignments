var app = angular.module("WishList");
app.directive("displayWishlist", function (){
    return {
        restrict: "E",
        templateUrl: "components/template.html"
    }
});

var app = angular.module("WishList");
app.controller("wishlist", ["$scope", function ($scope) {
    $scope.wishItems = [{
            imgUrl: "https://cdn.arstechnica.net/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-8.07.49-PM-2.png",
            name: "Nintendo Switch",
            price: 500
    },
        {
            imgUrl: "images/dark-side-console.jpeg",
            name: "Original Pink Floyd Recording Console",
            price: 18888888
    },
        {
            imgUrl: "http://www.fmicassets.com/Damroot/Zoom/10001/1509800821_gtr_frt_001_rr.png",
            "name": "George Harrison Rosewood Telecaster",
            price: 12500
    }];
}]);

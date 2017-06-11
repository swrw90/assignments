var app = angular.module("WishList");
app.controller("moreTech", ["$scope", function ($scope) {
    $scope.wishItems = [{
            imgUrl: "http://cdn.blendtec.com/images/RecipeImage/00/22/09/554d31ee40084f83bf527d0eac1f004b/crepes_main_620x320.jpg",
            name: "Nintendo Switch",
            price: 500
    },
        {
            imgUrl: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=&url=http%3A%2F%2Fassets-cdn.ekantipur.com%2Fimages%2Fthird-party%2Fentertainment%2Fpinkfold-08032017093040-1000x0.jpg&psig=AFQjCNGjY2K3s0sxnE_hOqnjZWUbLgbcuA&ust=1496620372031968",
            name: "Original Pink Floyd Recording Console",
            price: 1800000000
    },
        {
            imgUrl: "http://www.fmicassets.com/Damroot/Zoom/10001/1509800821_gtr_frt_001_rr.png",
            "name": "George Harrison Rosewood Telecaster",
            price: 12500
    }];
}]);

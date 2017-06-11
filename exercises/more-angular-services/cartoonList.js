var app = angular.module("moreServices");
app.service("cartoonList", function () {
    this.cartoons = [];
    this.addCartoon = function (cartoon) {
        this.cartoons.push(cartoon);
    }
});

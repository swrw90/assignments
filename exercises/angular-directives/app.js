var app = angular.module("MyApp", []);
app.controller("MainCtrl", ["$scope", function ($scope) {
    $scope.allen = {
        name: "Allen Woody",
        email: "bloop@gmail.com"
    }
    $scope.bif = {
        name: "bif",
        email: "blah@gmail.com"
    }
    $scope.greet = function (str) {
$scope.greeting = "hello, " + str;
    }
}]);


app.directive("myInfo", function () {

    return {
        restrict: "A",
        scope: {
            "contactInfo": "=myInfo"
        },
        //        template: "<h1>My info</h1>" 
        //        templateUrl: "info.html"
        template: "<span>{{contactInfo.name}} -- reach me at {{contactInfo.email}}</span>"
    }

});


//app.directive("onEnter", function() {
//    var link = function (scope, element, attrs) {
//        element.on("keydown",  function (event){
//            if (event.which === 13) {
//                scope.$apply(function () {
//                    scope.$eval(attrs.onEnter);
//                });
//                event.preventDefault();
//            }
//        });
//    };
//    
//    return {
//        restrict: "A",
//        link: link
//    }
//})
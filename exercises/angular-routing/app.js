var app = angular.module("routingApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
           $routeProvider
           .when("/home", {
               template: "<h1> Hello world!</h1>",
           })
    .when("/about", {
               template: "<h1> You're at the about page!</h1>",
           })
            }]);



//window.addEventListener("hashchange", function(){
//    console.log("Changed to " + window.location.hash);
//});


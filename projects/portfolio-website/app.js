//var app = angular.module("Portfolio", ["ngRoute"]);
//
//app.config(["$routeProvider", function ($routeProvider) {
//    $routeProvider
//        .when("/aboutme", {
//            templateUrl: "components/about-me/aboutMe.html",
//            controller: "aboutme"
//        })
//        .when("/contact", {
//            templateUrl: "components/contact/contact.html",
//        controller: "contact"
//        })
//        .otherwise({
//            redirectTo: "/contact"
//        });
//}]);


//WELCOME SCREEN
$(function() {
                
                setTimeout(function() {
                    $('.fly-in-text').removeClass('hidden');
                }, 500);
                
            });

//enabling smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
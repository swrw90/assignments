//var app = angular.module("MyApp", []); /*takes app name and dependecies, even with no dependecies you must have [] or it will not connect to angular. Add ng-app"MyApp" to index.*/
//
//app.controller("MainController", function($scope){
//    
//    $scope.person = {
//     firstName: "Jonny",
//        lastName: "Mathis"
//
//    };
//    
//    $scope.getFullName = function(){
//        return $scope.person.firstName + " " + $scope.person.lastName;
//    };
//});


/*====================================================================*/
    
    var app = angular.module("MyApp", []);

app.controller("MainController", function($scope){
    
    $scope.people = {
     firstName: "Jonny",
        lastName: "Mathis"
    },
        {
        firstName: "Bugs",
        lastName: "Rabbit"
    },
        {
        firstName: "Helga",
        localStorage: "Swenderson"
    }

    };
    
    $scope.getFullName = function(){
        return $scope.person.firstName + " " + $scope.person.lastName;
    };
});
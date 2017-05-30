var app = angular.module("ServiceApp");

app.service("someService", [function () {

    this.add = function(num) {
        return num + num;
    };
    
    this.subtract = function(num) {
        return num * num; 
    }
}]);

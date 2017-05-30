var app = angular.module = ("MyApp", []);
app.controller = ("secondCtrl", ["$scope", function ($scope) {
    $scope.name = "jill";
    $scope.multiply = function () {
        $scope.result = $scope.num1 * $scope.num2;
    }

                                 }]);

app.controller = ("myCtrl", ["$scope", function ($scope) {

    //["$scope", <-- this makes sure you have reference to the service/dependency being injected even after the code has be midified. $scope is an object, think of it like a box that can hold all of your data and display it. Putting something "on the $scope" means putting data into the "box' and moves it to html using <script>$scope.test/> <html>EXAMPLE <h1>{{test}}/>.
    $scope.sum = function () {
        //        $scope.result = $scope.num1 + $scope.num2;
        console.log($scope.num1 + $scope.num2);
    }

    //    $scope.isAdmin = true;
    //    $scope.checkGender = function () {
    //        console.log($scope.gender);
    //    }

}]);

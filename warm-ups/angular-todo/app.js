var app = angular.module("ToDoApp", []);
app.controller("MainCtrl", ["$scope", "httpService", function ($scope, httpService) {

    fetchTodoList();
    $scope.boxChecked = function (item) {
        httpService.updateTodo(item._id, item).then(function () {
            fetchTodoList();
        });
    };

    // Fetches todo items from the network
    function fetchTodoList() {
        httpService.getTodoList().then(function (response) {
            $scope.todoList = response.data;
        });
    };

    // Adds new item to the todo list.
    $scope.todoAdd = function (item) {
        httpService.addTodo(item).then(function (response) {
            fetchTodoList()
        });
    };

    //Removes item from todo list.
    $scope.removeItem = function (item) {
        httpService.removeTodo(item).then(function () {
            fetchTodoList();
        });
    };
}]);

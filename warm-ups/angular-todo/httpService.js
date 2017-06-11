var app = angular.module("ToDoApp");

const apiString = "https://api.vschool.io/sethwatson/todo/"

app.service("httpService", ["$http", function ($http) {

    this.getTodoList = function () {
        return $http.get(apiString)
    };

    this.addTodo = function (item) {
        return $http.post(apiString, item)
    };

    this.updateTodo = function (id, item) {
        return $http.put(apiString + id, item)
    }

    this.removeTodo = function (item) {
        return $http.delete(apiString + item._id)
    }
}]);

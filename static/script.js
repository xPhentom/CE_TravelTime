var app = angular.module("homeApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "/start.html",
    })
})
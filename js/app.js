var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/projects", {
        templateUrl : "views/projects.html"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    });
});
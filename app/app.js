console.log("app.js");

var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      controller : "BookCtrl",
      templateUrl: "app/partials/guidepartial.html",
    })
    .otherwise({
      redirectTo: "/"
    });
});
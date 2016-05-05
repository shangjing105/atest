'use strict';

// Declare app level module which depends on views, and components
var index=angular.module('index', ['ngRoute','select','login','register','student']);

index.config(['$routeProvider',function ($routeProvider) {
  $routeProvider
      .when('/select',{templateUrl:'views/select.html',controller:'selectc'})
      .when('/login',{templateUrl:'views/login.html',controller:'loginc'})
      .when('/register',{templateUrl:'views/register.html',controller:'registerc'})
      .when('/student/list',{templateUrl:'views/home.html',controller:'homec'})
      .when('/student/add',{templateUrl:'views/add.html',controller:'addc'})
      .when('/student/update/:id',{templateUrl:'views/update.html',controller:'updatec'})
      .otherwise({redirectTo:'/select'});
}]);

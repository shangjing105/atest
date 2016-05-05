'use strict';

var login = angular.module('login', []);

login.controller('loginc', function ($scope, loginService) {
    $scope.submit = function () {
        console.log($scope.user);
        var data = $scope.user;
        loginService.runLogin(data);
    }

});


login.factory('loginService', ['$http','$location',
    function ($http,$location) {
        var runLogin = function (data) {
            $http.post('http://127.0.0.1:3000/login', data)
                .success(function (data) {//成功
                    if (data.status) {
                        console.log("ok");
                       // $scope.$emit("runLogin", data.msg);
                        $location.path("/student/list");
                    }else {

                    }
                })
                .error(function (data) {//失败
                    console.log("请求失败----error"+data)
                });
        }
        return {
            runLogin: runLogin
        }
    }
]);

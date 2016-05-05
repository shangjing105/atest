'use strict';

var register=angular.module('register',[]);


register.controller('registerc', function ($scope, registerService) {
    $scope.register = function () {
        console.log($scope.user);
        var data = $scope.user;
        registerService.runregister(data);
    }

});


register.factory('registerService', ['$http','$location',
    function ($http,$location) {
        var runregister = function (data) {
            $http.post('http://127.0.0.1:3000/register', data)
                .success(function (data) {//成功
                    if (data.status) {
                        console.log("ok");
                        // $scope.$emit("runLogin", data.msg);
                        $location.path("/login");
                    }else {

                    }
                })
                .error(function (data) {//失败
                    console.log("请求失败----error"+data)
                });
        }
        return {
            runregister: runregister
        }
    }
]);
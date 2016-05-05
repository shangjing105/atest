'use strict';

// Declare app level module which depends on views, and components
var student=angular.module('student', []);

/**
 * list
 */
student.controller('homec',function ($scope,studentService,$location) {
    $scope.stus=[];
    studentService.list().success(function (data) {
        if (data.status) {
            console.log("ok--");
            $scope.stus=data.msg;
        }
    });
    
    $scope.delete = function (id) {
        studentService.delete(id).success(function (data) {
            if (data.status) {
                console.log("ok");
                $scope.stus.splice($scope.stus.indexOf(id),1);
            }
        });
    }
});

/**
 * add
 */
student.controller('addc',function ($scope,$location,studentService) {
    $scope.add = function () {
        console.log($scope.student);
        studentService.add($scope.student).success(function (data) {
            if (data.status) {
                console.log("ok");
                $location.path("/student/list");
            }
        });
    }
});

/**
 * update
 */
student.controller('updatec',function ($scope,$location,$routeParams,studentService) {
    $scope.student={};
    var id=$routeParams.id;
    console.log(id);
    studentService.updateBefore(id).success(function (data) {
        if (data.status) {
            console.log("ok--");
            $scope.student=data.msg;
        }
    });

    $scope.update = function () {
        console.log($scope.student);
        studentService.update($scope.student).success(function (data) {
            if (data.status) {
                console.log("ok");
                $location.path("/student/list");
            }
        });
    }
});

student.factory('studentService',['$http','$location',function ($http) {
    var service={};
    service.add = function (data) {
        return $http.post("http://127.0.0.1:3000/add",data);
    };

    service.list = function () {
       return $http.get("http://127.0.0.1:3000/list");
    };

    service.updateBefore = function (id) {
        return $http.get("http://127.0.0.1:3000/update?id="+id);
    };

    service.update = function (data) {
        return $http.post("http://127.0.0.1:3000/update",data);
    };

    service.delete = function (id) {
        return $http.get("http://127.0.0.1:3000/delete?id="+id);
    };
    return service;
}]);
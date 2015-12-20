angular.module('FitGoApp')
.controller('LoginCtrl', ['$scope', function($scope) {
        $scope.getcode=function(){
            console.log("getcode");
            alert("hell")
        }
        $scope.test = 2000;
        // $scope.tests=[1,2,3];
    }])

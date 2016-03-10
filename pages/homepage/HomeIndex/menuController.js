angular.module('FitGoApp').
	controller('menuController', ['$state','$scope','$ionicHistory','$rootScope', function($state,$scope,$ionicHistory,$rootScope){
		console.log($rootScope.lastState);
		$scope.getBack=function(){
			$state.go($rootScope.lastState);
		}
	}]);
angular.module('FitGoApp')
	.controller('homeIndexController', ['$scope','$state','$ionicHistory','$rootScope',function($scope,$state,$ionicHistory,$rootScope){
		var basic_info={
			name:'Lalala',
			join_date:'2016-2-29'
		}
		$scope.basic_info=basic_info;
		// console.log($ionicHistory.currentStateName());
		$scope.clickFirstTab=function(){
			$rootScope.lastState = "homepage.message";

			$state.go("homepage.message");
		}
		$scope.clickSecondTab=function(){
			$rootScope.lastState="homepage.home";
			$state.go("homepage.home");
		}
		$scope.clickThirdTab=function(){
			$rootScope.lastState="homepage.history_yue";
			$state.go("homepage.history_yue");
			
		}
	}]);
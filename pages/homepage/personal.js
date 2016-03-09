angular.module('FitGoApp')
	.controller('homeIndexController', ['$scope',function($scope){
		var basic_info={
			name:'Lalala',
			join_date:'2016-2-29'
		}
		$scope.basic_info=basic_info;

	}]);
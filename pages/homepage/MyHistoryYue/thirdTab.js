angular.module('FitGoApp')
	.controller('thirdTabController', ['$scope', function($scope) {
		var items={
			name:"环校跑",
			time:"2016年3月1日",
			number:8,
			tag:"我要瘦QAQ"
		}
		$scope.items=items;
	}]);
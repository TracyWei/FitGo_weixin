angular.module('FitGoApp')
	.controller('everyItemController', ['$scope',function($scope){
		var displayItem={
			name:"环校跑",
			location:"环校",
			startTime:"2016-3-1-上午10:00",
			endTime:"2016-3-1-上午12:00",
			remark:"想找个跑的慢一点的"
		}
		$scope.displayItem=displayItem;
		console.log(displayItem.name);
	}]);
angular.module('FitGoApp')
	.controller('everyItemController', ['$scope',function($scope){
		var displayItem={
			name:"环校跑",
			location:"环校",
			startTime:"2016-3-1-上午10:00",
			endTime:"2016-3-1-上午12:00",
			remark:"想找个跑的慢一点的"
		}
		var everyOne={
			name:"小A",
			words:"hello!我们一起跑步吧!",
			className:"ion-female",
			isFemale:true,
			isMale:false,
			isNot:false,
			itemClass:true,
			agreeColor:false,
			disagreeColor:false,
			forbidden:false
		}
		$scope.displayItem=displayItem;
		$scope.everyOne=everyOne;
		console.log(displayItem.name);
		$scope.agree=function(){
			everyOne.agreeColor=true;
			everyOne.forbidden=true;
			console.log("shdhsf");
		}
		$scope.disagree=function(){
			everyOne.disagreeColor=true;
			everyOne.forbidden=true;
			console.log("aaa");
		}
	}]);
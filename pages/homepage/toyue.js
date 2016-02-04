angular.module('FitGoApp')
	.controller('toYueController', ['$scope', '$state', function($scope, $state){
		//选项框
		var selections={
			selectItems:0,
			myitem:''
		}
		//show&hide
		var appearance={
			oitems:true,
			mitems:false
		}
		$scope.selections=selections;
		$scope.appearance=appearance;
		// $scope.sel=0;
		$scope.items=[{name:"环校跑",id:0},
					{name:"羽毛球",id:1},
					{name:"篮球",id:2},
					{name:"足球",id:3},
					{name:"网球",id:4},
					{name:"轮滑",id:5},
					{name:"健身房",id:6},
					{name:"自定义",id:7}]
		$scope.tryagain="11888";
		$scope.itemChange=function(){
			console.log(selections.selectItems);
			if(selections.selectItems==7){
				appearance.oitems=!appearance.oitems;
				appearance.mitems=!appearance.mitems;
			}
		}
		// console.log($scope.tryagain);
	}]);
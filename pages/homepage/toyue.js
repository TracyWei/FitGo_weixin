angular.module('FitGoApp',['ngCookies'])
	.controller('toYueController', ['$scope', '$state', '$cookieStore',function($scope, $state,$cookieStore){
		//选项框
		var selections={
			selectItems:0,
			myitem:'',
			selectLocations:0,
		}
		//show&hide
		var appearance={
			oitems:true,
			mitems:false,
			olocations:true,
			mlocations:false,
			labelS:false,
		}
		//计点击次数
		var counts={
			labelCounts:0
		}
		//labels
		var myLabels=[{name:"妹纸妹纸"},
					{name:"汉纸汉纸"},
					{name:"狗带狗带"},
					{name:"当我们被世界抛弃我们还有篮球"},
					{name:"23333"}]
		$scope.selections=selections;
		$scope.appearance=appearance;
		$scope.counts=counts;
		$scope.myLabels=myLabels;
		$scope.items=[{name:"环校跑",id:0},
					{name:"羽毛球",id:1},
					{name:"篮球",id:2},
					{name:"足球",id:3},
					{name:"网球",id:4},
					{name:"轮滑",id:5},
					{name:"健身房",id:6},
					{name:"自定义",id:7}]
		$scope.locations=[{name:"环校",id:0},
						{name:"梅园操场",id:1},
						{name:"桔园操场",id:2},
						{name:"桔园篮球场",id:3},
						{name:"桃园操场",id:4},
						{name:"桃园篮球场",id:5},
						{name:"网球场",id:6},
						{name:"钢菊",id:7},
						{name:"自定义",id:8}]
		$scope.itemChange=function(){
			console.log(selections.selectItems);
			if(selections.selectItems==7){
				appearance.oitems=!appearance.oitems;
				appearance.mitems=!appearance.mitems;
			}
		}
		$scope.locationChange=function(){
			console.log(selections.selectLocations);
			if(selections.selectLocations==8){
				appearance.olocations=!appearance.olocations;
				appearance.mlocations=!appearance.mlocations;
			}
		}
		$scope.showLabel=function(){
			counts.labelCounts++;
			console.log(counts.labelCounts);
			if(counts.labelCounts%1==0){
				appearance.labelS=!appearance.labelS;
				console.log(appearance.labelS);
			}
		}
		// $scope.labelClick=function(){
		// 	$cookieStore.put("labels",label.name);
		// 	console.log(label.name+"haha");
		// }
	}]);
angular.module('FitGoApp')
	.controller('toYueController', ['$scope', '$state','$rootScope',function($scope, $state,$rootScope){
		// var arr=[1,2,3];
		// window.localStorage.setItem('arr',window.JSON.stringify(arr));
		// console.log(window.JSON.parse(window.localStorage.getItem('arr')));
		//选项框
		console.log("ddd");
		// $rootScope.lastState = "111";
		var selections={
			selectItems:0,
			myitem:'',
			selectLocations:0,
			mylocation:''
		}
		//show&hide
		var appearance={
			oitems:true,
			mitems:false,
			olocations:true,
			mlocations:false,
			labelS:false,
			markS:false,
			inputS:false,
			inputYueDiv:false
		}
		//计点击次数
		var counts={
			labelCounts:0,
			inputCounts:0,
			yueDivCounts:0
		}
		//labels
		var myLabels=[{name:"妹纸妹纸",id:0,markS:false,count:0},
					{name:"汉纸汉纸",id:1,markS:false,count:0},
					{name:"狗带狗带",id:2,markS:false,count:0},
					{name:"当我们被世界抛弃我们还有篮球",id:3,markS:false,count:0},
					{name:"23333",id:4,markS:false,count:0}]
		//自定义标签
		var inputLabel={
			myOwnLabel:''
		}
		//主页展示的约
		var yueItem={
			yueDetailS:false,
			messageS:false
		}
		var words={
			yuebtn:"约"
		}
		$scope.inputLabel=inputLabel;
		$scope.selections=selections;
		$scope.appearance=appearance;
		$scope.counts=counts;
		$scope.myLabels=myLabels;
		$scope.yueItem=yueItem;
		$scope.words=words;
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
		$scope.wangToYue=function(){
			counts.yueDivCounts++;
			appearance.inputYueDiv=!appearance.inputYueDiv;
		}
		$scope.itemChange=function(){
			if(selections.selectItems==7){
				appearance.oitems=!appearance.oitems;
				appearance.mitems=!appearance.mitems;
			}
		}
		$scope.locationChange=function(){
			if(selections.selectLocations==8){
				appearance.olocations=!appearance.olocations;
				appearance.mlocations=!appearance.mlocations;
			}
		}
		$scope.showLabel=function(){
			counts.labelCounts++;
			appearance.labelS=!appearance.labelS;
		}
		var last=-1;
		$scope.clickItem=function(id,markS,name,count){
			myLabels[id].count++;
			if(myLabels[id].count%2==1){
				myLabels[id].markS=true;
				if(window.localStorage.getItem('choosenItem')!=''){
					console.log(last);
					if(last>=0){
						myLabels[last].markS=false;
					}
					window.localStorage.removeItem('choosenItem');
					console.log(name+'1');
				}
				console.log(name+'2');
				window.localStorage.setItem('choosenItem',name);
			}
			else if(myLabels[id].count%2==0){
				window.localStorage.removeItem('choosenItem');
				myLabels[id].markS=false;
				console.log(name);
			}
			last=id;
		}
		$scope.addLabel=function(){
			counts.inputCounts++;
			appearance.inputS=!appearance.inputS;
		}
		$scope.toAddLabel=function(){
			if(last>=0){
				window.localStorage.removeItem('choosenItem');
				myLabels[last].markS=false;
			}
			var tempLength=myLabels.length;
			console.log(tempLength);
			console.log(inputLabel.myOwnLabel);
			myLabels.push({name:inputLabel.myOwnLabel,id:tempLength,markS:true,count:0});
			window.localStorage.setItem('choosenItem',inputLabel.myOwnLabel);
			console.log(myLabels.length);
			last=tempLength;
			inputLabel.myOwnLabel='';
			appearance.inputS=false;
		}
		$scope.getMoreDetail=function(){
			yueItem.yueDetailS=!yueItem.yueDetailS;
		}
		$scope.yue=function(){
			yueItem.messageS=true;
			console.log(yueItem.messageS+"out")
			setTimeout(function(){
				yueItem.messageS=false;
				console.log(yueItem.messageS+"in");
			},1000);
		}

	}]);
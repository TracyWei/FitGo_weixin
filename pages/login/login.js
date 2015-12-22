angular.module('FitGoApp')
.controller('loginController', ['$scope', function($scope){
	var words={
		'login_word':"手机登陆"
	}
	var notice={
		'p_null':false,
		'pwd_null':false,
		'auth':false,
		'p_number':'',
		'pwd_number':'',
		'error_class':1,
		// 'flag':false
	}
	$scope.notice=notice;
	$scope.words=words;
	$scope.plogin=function(){
		console.log(notice.p_number);
		if(!notice.p_number){
			notice.p_null=true;
		}
		else{
			notice.p_null=false;
		}
		if(!notice.pwd_number){
			notice.pwd_null=true;
		}
		else{
			notice.pwd_null=false;
		}
		if(notice.p_number&&notice.pwd_number){
			notice.error_class=1;
			words.login_word="手机登陆";
			// notice.flag=false;
		}
		else{
			notice.error_class=0;
			words.login_word="出错啦⊙△⊙";	
			// notice.flag=true;	
		}
		console.log("flag"+notice.flag);
	}
}])
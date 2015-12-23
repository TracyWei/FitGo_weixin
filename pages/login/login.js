angular.module('FitGoApp')
	.controller('loginController',['$scope', '$state', function($scope,$state) {
		var words = {
				'login_word': "手机登陆",
				'verify_word': "验证"
			}
// ——————————————登录检查——————————————
		var notice = {
			'p_null': false,
			'pwd_null': false,
			'pwd_6':false,
			'auth': false,
			'p_number': '',
			'pwd_number': '',
			'error_class': 1,
			// 'flag':false
		}
		$scope.notice = notice;
		$scope.words = words;
		$scope.plogin = function() {
				console.log(notice.p_number);
				if (!notice.p_number) {
					notice.p_null = true;
				} else {
					notice.p_null = false;
					if(notice.pwd_number.length<6)
					{
						notice.pwd_6=true;
					}
					else{
						notice.pwd_6=false;
					}
				}
				if (!notice.pwd_number) {
					notice.pwd_null = true;
				} else {
					notice.pwd_null = false;
				}
				if (notice.p_number && notice.pwd_number && !notice.auth) {
					notice.error_class = 1;
					words.login_word = "手机登陆";
					// notice.flag=false;
				} else {
					notice.error_class = 0;
					words.login_word = "出错啦⊙△⊙";
					// notice.flag=true;	
				}
			}
// ——————————————学号一卡通检查——————————————
		var vnotice = {
			's_null': false,
			'c_null': false,
			'vauth': false,
			's_number': '',
			'c_number': '',
			'error_class': 1,
		}
		$scope.vnotice = vnotice;
		$scope.verify = function() {
				if (!vnotice.s_number) {
					vnotice.s_null = true;
				} else {
					vnotice.s_null = false;
				}
				if (!vnotice.c_number) {
					vnotice.c_null = true;
				} else {
					vnotice.c_null = false;
				}
				if (vnotice.s_number && vnotice.c_number && !vnotice.vauth) {
					notice.error_class = 1;
					words.verify_word = "验证";
					$state.go('e-signup')
				} else {
					notice.error_class = 0;
					words.verify_word = "出错啦⊙△⊙";
					// notice.flag=true;	
				}
			}
	}])






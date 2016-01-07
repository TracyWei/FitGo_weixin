angular.module('FitGoApp')
	.controller('loginController', ['$scope', '$state', function($scope, $state) {
		var words = {
				'login_word': "手机登陆",
				'verify_word': "验证",
			}
			// ——————————————登录检查——————————————
		var notice = {
			'p_null': false,
			'pwd_null': false,
			'pwd_6': false,
			'auth': false, //用户名密码正确性检查
			'p_number': '',
			'pwd_number': '',
			'error_class': 1,
			'flag6': false
		}
		$scope.notice = notice;
		$scope.words = words;
		$scope.plogin = function() {
				//手机号不为空
				if (!notice.p_number) {
					notice.p_null = true;
				} else {
					notice.p_null = false;
				}
				//密码不为空且大等于6
				if (!notice.pwd_number || notice.pwd_number.length < 6) {
					notice.pwd_null = true;
				} else {
					notice.pwd_null = false;
					notice.flag6 = true;

				}
				//按钮变化(输入都不为空，密码大等于6，用户名密码正确性未检查)
				if (notice.p_number && notice.pwd_number && !notice.auth && notice.flag6) {
					notice.error_class = 1;
					words.login_word = "手机登陆";
					$state.go('homepage.home')
				} else {
					notice.error_class = 0;
					words.login_word = "出错啦⊙△⊙";
				}
			}
			// ——————————————学号一卡通检查——————————————
		var vnotice = {
			's_null': false,
			'c_null': false,
			'vauth': false, //一卡通学号正确
			's_number': '',
			'c_number': '',
			'error_class': 1,
		}
		$scope.vnotice = vnotice;
		$scope.verify = function() {
				//学号为空
				if (!vnotice.s_number) {
					vnotice.s_null = true;
				} else {
					vnotice.s_null = false;
				}
				//一卡通为空
				if (!vnotice.c_number) {
					vnotice.c_null = true;
				} else {
					vnotice.c_null = false;
				}
				//按钮变化(输入均不为空，一卡通学号正确未检查)
				if (vnotice.s_number && vnotice.c_number && !vnotice.vauth) {
					notice.error_class = 1;
					words.verify_word = "验证";
					$state.go('e-signup');

				} else {
					notice.error_class = 0;
					words.verify_word = "出错啦⊙△⊙";
					// notice.flag=true;	
				}
			}
			
	}])










;
angular.module('FitGoApp')
    .controller('userController', ['$scope','$state',function($scope,$state) {
        var seconds = {
            'seconds': 60,
            'forbid': false,
            'getShow': true,
            'codeShow': false,
            'isForbid': true
        }
        $scope.seconds = seconds;
        var timetoggle = function() {
            seconds.getShow = !seconds.getShow;
            seconds.codeShow = !seconds.codeShow;
            seconds.forbid = !seconds.forbid;
            seconds.isForbid = !seconds.isForbid;
        }
        $scope.getcode = function() {
                console.log("getcode");
                seconds.forbid = true;
                timetoggle();
                var counter = setInterval(function() {
                    $scope.seconds.seconds--;
                    if (seconds.seconds <= 0) {
                        timetoggle();
                        clearInterval(counter);
                        seconds.seconds = 60;
                    }
                    $scope.$digest()
                }, 1000);
            }
            // ——————————————更改密码检查——————————————
        var change_notice = {
            'p_null': false,
            'code_null': false,
            'pwd1_null': false,
            'pwd_notsame': false,
            'pwd2_null': false,
            // 'pwd2_notsame':false,
            'p_number': '',
            'code_number': '',
            'pwd1_number': '',
            'pwd2_number': '',
            'error_class': 1,
            'codeauth': false, //code正确性检查
            'flag61': false,
            'flag62': false
        }
        var words = {
            'change_word': "修改密码",
            'signup_word': '注册'
        }
        $scope.change_notice = change_notice;
        $scope.words = words;
        $scope.changepwd = function() {
                //手机号码为空
                if (!change_notice.p_number) {
                    change_notice.p_null = true;
                } else {
                    change_notice.p_null = false;
                }
                //验证码为空
                if (!change_notice.code_number) {
                    change_notice.code_null = true;
                } else {
                    change_notice.code_null = false;
                }
                //密码为空或长度小于6
                if (!change_notice.pwd1_number || change_notice.pwd1_number.length < 6) {
                    change_notice.pwd1_null = true;
                } else {
                    change_notice.pwd1_null = false;
                    change_notice.flag61 = true;
                }
                //确认密码为空或长度小于6
                if (!change_notice.pwd2_number || change_notice.pwd2_number.length < 6) {
                    change_notice.pwd2_null = true;
                } else {
                    change_notice.pwd2_null = false;
                    change_notice.flag62 = true;
                    if (change_notice.pwd1_number == change_notice.pwd2_number) {
                        change_notice.pwd_notsame = false;
                        console.log("change_notice.pwd2_notsame" + change_notice.pwd_notsame);
                    } else
                        change_notice.pwd_notsame = true;
                    console.log("change_notice.pwd2_notsame" + change_notice.pwd_notsame);

                }
                //按钮变化(输入都不为空，密码长度大于等于6，两次输入一直，还未检查code正确性)
                if (change_notice.p_number && change_notice.pwd1_number && change_notice.pwd2_number && !change_notice.codeauth && change_notice.flag61 && change_notice.flag62 && change_notice.code_number && !change_notice.pwd_notsame) {
                    change_notice.error_class = 1;
                    words.change_word = "修改密码";
                    $state.go('homepage.home')
                    // notice.flag=false;
                } else {
                    change_notice.error_class = 0;
                    words.change_word = "出错啦⊙△⊙";
                    console.log("error")
                        // notice.flag=true;    
                }

            }
            // ——————————————注册检查——————————————
        var snotice = {
            'name_null': false,
            'uname': '',
            'p_exist': false,
            'p_null': false,
            'signauth': false,
            'p_number': '',
            'code_null': false,
            'code_number': '',
            'pwd_null': false,
            'pwd_number': '',
            'error_class': 1,
            'flag6': false
        }
        $scope.snotice = snotice;
        $scope.signup = function() {
            //用户名为空
            if (!snotice.uname) {
                snotice.name_null = true;
            } else {
                snotice.name_null = false;
            }
            //手机号号码为空，手机已存在（未检查）
            if (!snotice.p_number) {
                snotice.p_null = true;
            } else {
                snotice.p_null = false;
            }
            //验证码为空
            if (!snotice.code_number) {
                snotice.code_null = true;
            } else {
                snotice.code_null = false;
            }
            //密码大等于6
            if (!snotice.pwd_number || snotice.pwd_number.length < 6) {
                snotice.pwd_null = true;
            } else {
                snotice.pwd_null = false;
                snotice.flag6 = true
            }
            //按钮变化(输入都不为空，密码长度大等于6，未检查：手机号查重和验证码错误)
            if (snotice.uname && snotice.p_number && snotice.code_number && snotice.pwd_number && snotice.flag6 &&
                !snotice.p_exist && !snotice.signauth) {
                snotice.error_class = 1;
                words.signup_word = "注册";
                $state.go('personal-info');

            } else {
                snotice.error_class = 0;
                words.signup_word = "出错啦⊙△⊙";
            }
        }
    }]);
angular.module('FitGoApp')
.controller('userController', ['$scope', function($scope) {
        var seconds={
                    'seconds':60,
                    'forbid':false,
                    'getShow':true,
                    'codeShow':false,
                    'isForbid':true
                }
        $scope.seconds=seconds;
        var timetoggle=function(){
            seconds.getShow=!seconds.getShow;
            seconds.codeShow=!seconds.codeShow;
            seconds.forbid=!seconds.forbid;
            seconds.isForbid=!seconds.isForbid;
        }
        $scope.getcode=function(){
            console.log("getcode");
            seconds.forbid=true;
            timetoggle();
            var counter=setInterval(function(){
            $scope.seconds.seconds--;              
            if(seconds.seconds<=0){
                timetoggle();
                clearInterval(counter);
                seconds.seconds=60;
            }
            $scope.$digest()
        },1000);
        }
        var change_notice={
            'p_null':false,
            'code_null':false,
            'pwd1_null':false,
            'pwd_notsame':false,
            'pwd2_null':false,
            // 'pwd2_notsame':false,
            'p_number':'',
            'code_number':'',
            'pwd1_number':'',
            'pwd2_number':'',
            'error_class':1,
            'codeauth':false,//code正确性检查
            'flag61':false,
            'flag62':false
        }
        var words={
            'change_word':"修改密码"
        }
        $scope.change_notice=change_notice;
        $scope.words=words;
        $scope.changepwd=function(){
            //手机号码为空
            if(!change_notice.p_number){
                change_notice.p_null=true;
            }
            else{
                change_notice.p_null=false;
            }
            //验证码为空
            if(!change_notice.code_number){
                change_notice.code_null=true;
            }
            else{
                change_notice.code_null=false;
            }
            //密码为空或长度小于6
            if(!change_notice.pwd1_number||change_notice.pwd1_number.length<6){
                change_notice.pwd1_null=true;
            }
            else{
                change_notice.pwd1_null=false;
                change_notice.flag61=true;
            }
            //确认密码为空或长度小于6
            if(!change_notice.pwd2_number||change_notice.pwd2_number.length<6){
                change_notice.pwd2_null=true;
            }
            else{
                change_notice.pwd2_null=false;
                change_notice.flag62=true;
                if(change_notice.pwd1_number==change_notice.pwd2_number){
                    change_notice.pwd_notsame=false;
                    console.log("change_notice.pwd2_notsame"+change_notice.pwd_notsame);
                }
                else
                    change_notice.pwd_notsame=true;
                    console.log("change_notice.pwd2_notsame"+change_notice.pwd_notsame);

            }
            //按钮变化(输入都不为空，密码长度大于等于6，两次输入一直，还未检查code正确性)
            if (change_notice.p_number && change_notice.pwd1_number &&change_notice.pwd2_number 
                && !change_notice.codeauth && change_notice.flag61&& change_notice.flag62
                && change_notice.code_number&& !change_notice.pwd_notsame) 
                {
                    change_notice.error_class = 1;
                    words.change_word = "修改密码";
                    // notice.flag=false;
                } 
            else {
                    change_notice.error_class = 0;
                    words.change_word = "出错啦⊙△⊙";
                    console.log("error")
                    // notice.flag=true;    
                }

        }
    }])
;
































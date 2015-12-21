angular.module('FitGoApp')
.controller('LoginCtrl', ['$scope', function($scope) {
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
    }])
;

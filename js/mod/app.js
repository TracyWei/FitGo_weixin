angular.module('FitGoApp', ['ionic','FitGoApp.config','FitGoApp.services'])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    // $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
    //index
    .state(
        "index",{
            url:"/fitgo",
            abstract:true,
            templateUrl:"pages/index/menu.html"
        })
    .state(
        "index.home",
        {
            url:"/home",
            views:{
                "home":{
                    templateUrl:"pages/index/home.html",
                    controller:"HomeCtrl"
                }
            }
        })
    .state(
        "index.state2",
        {
            url:"/state2",
            views:{
                "home":{
                    templateUrl:"pages/index/state2.html",
                    controller:"MyCtrl"
                }
            }
        })
    //login
    .state(
        "login",{
            url:"/login",
           
            templateUrl:"pages/login/login.html",
            controller:"MyCtrl"
                            
        })
    //yuyue
    .state(
        "yuyue",{
            url:"/yuyue",
            abstract:true,
            templateUrl:"pages/yuyue/menu.html"
        })
    .state(
        "yuyue.home",
        {
            url:"/home",
            views:{
                "yuyue-home":{
                    templateUrl:"pages/yuyue/home.html",
                    controller:"MyCtrl"
                }
            }
        })
    .state(
        "yuyue.My",
        {
            url:"/my",
            views:{
                "yuyue-my":{
                    templateUrl:"pages/yuyue/my.html",
                    controller:"YuyueCtrl"
                }
            }
        })

    .state(
        "testpage",{
            url:"/testpage",
            templateUrl:"testpage.html",
            controller:"pagetestCtrl"
        });
    $urlRouterProvider.otherwise('/fitgo/home');
})
.controller('MyCtrl', function($scope,$state) {
    $scope.title="首页";
    $scope.data="我的测试ionic";
    // return $scope;
})

.controller('pagetestCtrl', function($scope,$state){
    $scope.content1="hhahh,okok";
});
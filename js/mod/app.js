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
    //——————————login——————————
    //欢迎页
    .state(
        "welcome",{
            url:"/welcome",
            templateUrl:"pages/login/welcome.html",
            controller:"MyCtrl"
                            
        })
    //手机登陆
    .state(
        "tologin",{
            url:"/welcome/tologin",
            templateUrl:"pages/login/tologin.html",
            controller:"loginController"
        })
    //验证
    .state(
        "verify",{
            url:"welcome/verify",
            templateUrl:"pages/login/verify.html",
            controller:"loginController"
        })
    //手机注册
    .state(
        "e-signup",{
            url:"/welcome/e-signup",
            templateUrl:"pages/login/e-signup.html",
            controller:"userController"
        })
    //微信注册
     .state(
        "w-signup",{
            url:"/welcome/w-signup",
            templateUrl:"pages/login/w-signup.html",
            controller:"MyCtrl"
        })
    //完善个人信息
    .state(
        "personal-info",{
            url:"/welcome/personal-info",
            templateUrl:"pages/login/personal-info.html",
            controller:"userController"
        })
    //——————————个人中心——————————
    //修改密码
    .state(
        "user",{
            url:"/user",
            abstract:true,
            templateUrl:"pages/user/user_index.html",
        })
    .state(
        "user.change-password",
        {
            url:"/change-password",
            views:{
                "user-change_passowrd":{
                    templateUrl:"pages/user/change-password.html",
                    controller:"userController"
                }
            }
        })
    //——————————首页——————————
    //首页
    .state(
        "homepage",{
            url:"/homepage",
            abstract:true,
            templateUrl:"pages/homepage/homepage_index.html"
        })
    .state(
        "homepage.home",
        {
            url:"/home",
            views:{
                "homepage-home":{
                    templateUrl:"pages/homepage/home.html",
                    controller:"MyCtrl"
                }
            }
        })
    //历史约
    .state(
        "homepage.history_yue",
        {
            url:"/history_yue",
            views:{
                "homepage-history_yue":{
                    templateUrl:"pages/homepage/history_yue.html",
                    controller:"MyCtrl"
                }
            }
        })
    .state(
        "homepage.message",
        {
            url:"/message",
            views:{
                "homepage-message":{
                    templateUrl:"pages/homepage/message.html",
                    controller:"MyCtrl"
                }
            }
        })
    .state(
        "testpage",{
            url:"/testpage",
            templateUrl:"testpage.html",
            controller:"pagetestCtrl"
        });
    $urlRouterProvider.otherwise('/welcome');
})
.controller('MyCtrl', function($scope,$state) {
    $scope.title="首页";
    $scope.data="我的测试ionic";
    // return $scope;
})

.controller('pagetestCtrl', function($scope,$state){
    $scope.content1="hhahh,okok";
});
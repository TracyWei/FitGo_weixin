angular.module('ionicApp', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state(
        "index",{
            url:"/herald",
            abstract:true,
            templateUrl:"pages/menu.html"
        })
    .state(
        "index.home",
        {
            url:"/home",
            views:{
                "home":{
                    templateUrl:"pages/state1.html",
                    controller:"MyCtrl"
                }
            }
        })
    .state(
        "index.state2",
        {
            url:"/state2",
            views:{
                "home":{
                    templateUrl:"pages/state2.html",
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
    $urlRouterProvider.otherwise('/herald/home');
})
.controller('MyCtrl', function($scope,$state) {
    $scope.title="首页";
    $scope.data="我的测试ionic";
    // return $scope;
})

.controller('pagetestCtrl', function($scope,$state){
    $scope.content1="hhahh,okok";
});
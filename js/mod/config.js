angular.module('FitGoApp.config',[])
.constant("ENV",{
    "name":"production",
    "debug":true,
    "version":'1.0.0',
    "api":'http://localhost:8000/api/v1'
})
.config(['$ionicConfigProvider',function($ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');  //默认ios tabs在上面显示，这里做全局设置，tabs在下面设置，无论是android还是ios
}]);
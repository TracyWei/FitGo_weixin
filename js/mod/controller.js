angular.module('HeraldApp')
.controller('HomeCtrl', ['$scope', '$ionicSlideBoxDelegate','$sce',function($scope,$ionicSlideBoxDelegate,$sce){
    $scope.slideHasChanged = function($index){
        
        // console.log($index);
    };
    $scope.slide_item=[
            {'slideimg':"./img/index/slide1.jpg"},
            {'slideimg':"./img/index/slide2.jpg"},
            {'slideimg':"./img/index/slide1.jpg"}
        ];
    // $scope.testurl = "./img/index/slide1.jpg";
}])

.controller('YuyueCtrl', ['$scope','callApi', function($scope,callApi){
    $scope.namedata=callApi.namedata;
    $scope.testApi = function(){
        callApi.getData()
            .then(function(data){
                // alert(data);
            }, function(data){
                // alert('ok+'+data);
            })
    };
}])






;

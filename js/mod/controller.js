angular.module('FitGoApp')
    .controller('HomeCtrl', ['$scope', '$ionicSlideBoxDelegate', '$sce', function($scope, $ionicSlideBoxDelegate, $sce) {
        $scope.slideHasChanged = function($index) {

            // console.log($index);
        };
        $scope.slide_item = [{
            'slideimg': "./img/index/slide1.jpg"
        }, {
            'slideimg': "./img/index/slide2.jpg"
        }, {
            'slideimg': "./img/index/slide1.jpg"
        }];
        // $scope.testurl = "./img/index/slide1.jpg";
    }])
    // .controller('LoginCtrl', ['$scope', function($scope) {
    //     $scope.getcode=function(){
    //         console.log("getcode");
    //     }
    //     $scope.test = 2000;
    //     // $scope.tests=[1,2,3];
    // }])



;
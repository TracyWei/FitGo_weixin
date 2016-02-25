angular.module('FitGoApp.services',[])
// .service('Storage', ['', function(){
//     "use strict";

//     // return {
//     //     setData:function(key,data){
//     //         return window.localStorage.setItem(key,window.JSON.stringfy(data));
//     //     },
//     //     getData:function(key){
//     //         return window.JSON.parse(window.localStorage.getItem(key));
//     //     }
//     // };
// }])

.service('callApi', ['$http','ENV','$q', function($http,ENV,$q){
    var i = 1;
    this.namedata = function(){
        return i;
    }
    var deferred = $q.defer();
    this.getData = function(){
        var base_url = ENV.api;
        var final_url = base_url+'/test'+'?&callback=JSON_CALLBACK';
        $http({
            method:'JSONP',
            url:final_url
        }).success(function(data){
            deferred.resolve(data);
        }).error(function(){
            deferred.reject('There was an error')
        })
        return deferred.promise;
    }

}]);

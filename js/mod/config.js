angular.module('HeraldApp.config',[])
.constant("ENV",{
    "name":"production",
    "debug":true,
    "version":'1.0.0',
    "api":'http://localhost:8000/api/v1'
});
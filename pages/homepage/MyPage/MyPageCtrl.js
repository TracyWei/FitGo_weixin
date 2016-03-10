angular.module('FitGoApp')
	.controller('infoController', ['$scope',function($scope){
		var page_info={
			name:'Lalala',
			join_date:'2016-2-29',
			campus:'九龙湖校区',
			gender:'女',
			school_year:'2013',
			signature:'dbdbdbdbdbdb'

		}
		$scope.page_info=page_info;

	}]);
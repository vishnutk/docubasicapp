'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('MainCtrl', ['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','billingservice','userservice','$route',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,billingservice,userservice,$route ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
 $rootScope.isAdmin = localStorageService.get('isAdmin');
 $rootScope.userid = localStorageService.get('userid');
 $rootScope.username = localStorageService.get('username');
  $scope.$route = $route;
 $rootScope.alerts=[];
 $scope.loginalerts=[];

 $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            //$location.path( "/login" );
            return false;
        }
 
  
  

  	var tid = {
  id:$rootScope.tenancyid 
}

 billingservice.getbilldetail.query((tid), function(data){

        $scope.billingdata = data.data;
         
    });

 var notesdata={
	tenancy_id:$rootScope.tenancyid 
}
settingservice.getnote.save((notesdata), function(data){
		
        $scope.notes = data.data;
         

    });
var data =  {id:$rootScope.tenancyid }
    userservice.getuserdetail.query((data), function(data1){
    
        $scope.userdata = data1.data;
        $scope.usercount = data1.data.users_count;
         $scope.admincount = data1.data.admin_count;

    });

    var todosdata={
  tenancy_id:$rootScope.tenancyid 
};
settingservice.gettodos.save((todosdata), function(data){
     
        $scope.todos = data.data;
         

    });
var praposaldata={
  id:$rootScope.tenancyid 
};

settingservice.getpraposaldata.query((praposaldata), function(data){
     
        $scope.praposals = data.data;
         

    });

    
  }]);
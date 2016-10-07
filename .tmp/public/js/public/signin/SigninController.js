
angular.module('ngErpSignin')
.controller('SigninController',['$log','$rootScope','$scope','$window','$timeout','toastr','userService',function($log,$rootScope,$scope,$window,$timeout,toastr,user){
    $scope.user={
      name:'ambert',
      email:'jc.ambert@free.fr',  
      password:'12345'
    };
    // set-up loading state
	$scope.signin = {
		loading: false
	}
    $scope.submitSignin = function(){
        
        // Set the loading state (i.e. show loading spinner)
        $scope.signin.loading = true;
        
        toastr.success('Try to signin');
        
        
        user.signin($scope.user.email,$scope.user.password).then(
            function(u){
                $rootScope.user = u.user;
                 $log.log('userService.signin Ok');
                 console.dir(u);
                 toastr.success('User '+ u.user.name +' is logged!');
                 toastr.success('Redirecting to Dashboard');
                 
                 $timeout(function(){$window.location = '/';},2000);
            },
            function(err){
                $log.log('userService.signin failed');toastr.error(err.error.message);
                $scope.signin.loading = true;
            }
        );
        
        
    }
}]);
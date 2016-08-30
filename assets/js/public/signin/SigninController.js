
angular.module('ngErpSignin')
.controller('SigninController',['$log','$scope','toastr','userService',function($log,$scope,toastr,user){
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
                 $log.log('userService.signin Ok');toastr.success('User is logged!');
            },
            function(err){
                $log.log('userService.signin failed');toastr.error(err.body);
            }
        );
        
        
    }
}]);
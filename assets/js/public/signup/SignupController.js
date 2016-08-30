
angular.module('ngErpSignup')
.controller('SignupController',['$log','$scope','toastr','userService',function($log,$scope,toastr,user){
    $scope.user={
      name:'ambert',
      email:'jc.ambert@free.fr',  
      password:'12345'
    };
    // set-up loading state
	$scope.signup = {
		loading: false
	}
    $scope.submitSignup = function(){
        
        // Set the loading state (i.e. show loading spinner)
        $scope.signup.loading = true;
        
        toastr.success('Try to signup');
        
        user.signup($scope.user).then(function(u){ $log.log('userService.signup Ok');toastr.success('User is created!');},function(err){$log.log('userService.signup failed');toastr.error(err.body);});
        //,function(u){toastr.success('User is created!');},function(err){toastr.error(err.body);});
        /*
        var User = sailsResource('user');
        var user = new User();
        user.name=$scope.user.name;
        user.email=$scope.user.email;
        user.password=$scope.user.password;
        user.$save(
            function(user){
                toastr.success('User is created!');
                //window.location='/';
            },
            function(err){
                $scope.signup.loading = false;
                //Email address is already taken by another user.
                toastr.error(err.body);
            }
        );*/
    }
}]);
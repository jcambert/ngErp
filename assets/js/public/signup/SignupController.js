angular.module('ngErpSignup')
.controller('SignupController',['$scope','toastr','sailsResource',function($scope,toastr,sailsResource){
    // set-up loading state
	$scope.signup = {
		loading: false
	}
    $scope.submitSignup = function(){
        
        // Set the loading state (i.e. show loading spinner)
        $scope.signup.loading = true;
        
        
        var User = sailsResource('signup');
        var user = new User();
        user.name=$scope.user.name;
        user.email=$scope.user.email;
        user.password=$scope.user.password;
        user.$save(
            function(user){
                toastr.success('User is created!');
                window.location='/';
            },
            function(err){
                //Email address is already taken by another user.
                toastr.error(err.body);
            }
        );
    }
}]);
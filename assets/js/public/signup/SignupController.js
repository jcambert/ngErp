angular.module('ngErpSignup')
.controller('SignupController',['$scope','toastr',function($scope,toastr){
    // set-up loading state
	$scope.signup = {
		loading: false
	}
    $scope.submitSignup = function(){
        toastr.success('User is being created!');
        // Set the loading state (i.e. show loading spinner)
        $scope.signup.loading = true;
    }
}]);
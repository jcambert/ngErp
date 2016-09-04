angular.module('ngErp')
.controller('DashboardController',['$log','$scope','$mdSidenav','userService','toastr',function($log,$scope,$mdSidenav,user,toastr){
    
    var vm=$scope;
    
    vm.toggleRightSidebar = function(){
        $mdSidenav('right-sidebar').toggle();
    }
    
    user.session().then(
        function(session){
            $log.log('Session:');$log.log(session);
            $scope.session=session;
            //toastr.success(session);
        },
        function(err){
            //toastr.error(err);
        }
    );
    

}])
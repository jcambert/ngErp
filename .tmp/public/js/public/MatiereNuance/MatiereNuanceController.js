angular.module('ngErp')
.controller('MatiereNuanceController',['$log','$scope','sailsResource','$mdDialog',function($log,$scope,sailsResource,$mdDialog){
    var self=$scope;
     
     self.customFullscreen = false;

     function loadNuances(){
         self.nuances = sailsResource('chiffragenuancematiere').query();
     }
     function showDialog(mode,ev,nuance){
         
         return $mdDialog.show({
            controller: 'MatiereNuanceEditController',
            templateUrl: 'templates/matiere_nuance_edit.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen,   // Only for -xs, -sm breakpoints.
            //preserveScope: true,
            locals:{
                mode:mode,
                nuance:nuance
            }
        });
     }
     
     self.edit = function(ev,nuance){
         $log.log('want edit nuance:'+nuance.id);

        showDialog('edit',ev,nuance)
        .then(function(nuance) {
            nuance.$save();
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
    self.add = function(ev){
        var Nuance = sailsResource('chiffragenuancematiere');
        var nuance =new Nuance();
        showDialog('add',ev,nuance)
        .then(function(nuance) {
            nuance.$save();
            loadNuances();
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
    self.delete = function(nuance){
        sailsResource('chiffragenuancematiere').get({id:nuance.id}).$delete(function(){loadNuances();});
    }
   
    loadNuances();
    
}])

.controller('MatiereNuanceEditController',['$scope', '$mdDialog','sailsResource','mode','nuance',function($scope, $mdDialog,sailsResource,mode,nuance){
    $scope.mode = mode;
    $scope.nuance = angular.copy( nuance);
    $scope.matieres={};
    
     $scope.loadMatieres = function(){
        $scope.matieres =  sailsResource('matiere').query();
    }
    
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.ok = function() {
      $mdDialog.hide($scope.nuance);
    };
    $scope.loadMatieres();
}])
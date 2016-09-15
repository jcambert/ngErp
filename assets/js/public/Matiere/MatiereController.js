angular.module('ngErp')
.controller('MatiereController',['$log','$scope','sailsResource','$mdDialog',function($log,$scope,sailsResource,$mdDialog){
    var self=$scope;
     
     self.customFullscreen = false;

     function loadMaterials(){
         self.matieres = sailsResource('matiere').query();
     }
     function showDialog(mode,ev,matiere){
         
         return $mdDialog.show({
            controller: 'MatiereEditController',
            templateUrl: 'templates/matiere_edit.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen,   // Only for -xs, -sm breakpoints.
            //preserveScope: true,
            locals:{
                mode:mode,
                matiere:matiere
            }
        });
     }
     
     self.edit = function(ev,matiere){
         $log.log('want edit matiere:'+matiere.id);

        showDialog('edit',ev,matiere)
        .then(function(matiere) {
            matiere.$save();
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
    self.add = function(ev){
        var Matiere = sailsResource('matiere');
        var matiere =new Matiere();
        showDialog('add',ev,matiere)
        .then(function(matiere) {
            matiere.$save();
            loadMaterials();
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
    
    loadMaterials();
}])

.controller('MatiereEditController',['$scope', '$mdDialog','mode','matiere',function($scope, $mdDialog,mode,matiere){
    $scope.mode = mode;
    $scope.matiere = angular.copy( matiere);
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.ok = function() {
      $mdDialog.hide($scope.matiere);
    };
}])
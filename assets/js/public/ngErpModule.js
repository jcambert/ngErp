'use strict';
angular.module('ngErp',['ngMaterial', 'ngMessages','compareTo','ngAnimate','toastr','sailsResource','ngErpModels','ui.router'])
.controller('MainController',['$scope','Settings',function($scope,Settings){
    console.dir(Settings);
    $scope.settings={};
    $scope.settings.showTooltip=Settings.showTooltip;
    
}])
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

.provider('Settings',[function(){
   var self=this;
   self.settings={};
    return {
        showTooltip: function (value) {
            self.settings['showTooltip']=value;
        },
        $get: function () {
            return {
                showTooltip: 'showTooltip' in self.settings?self.settings['showTooltip']:true,
                setShowTooltip:function(value){
                    self.settings['showTooltip']=value;
                }
            };
        }
    };
}])
.config(['$stateProvider', '$urlRouterProvider','$mdIconProvider','$mdThemingProvider','SettingsProvider',function($stateProvider, $urlRouterProvider,$mdIconProvider,$mdThemingProvider,SettingsProvider) {
    
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('orange');
    
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'templates/main.html',
        controller: 'MainController',
        abstract: true
      })
     .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'templates/dashboard.html',
        data: {
          title: 'Dashboard'
        }
      })
      .state('home.settings',{
          url:'/settings',
          templateUrl:'templates/settings.html'
      })
      .state('home.settings.matieres',{
          url:'/matiere',
          templateUrl:'templates/matiere.html',
          controller:'MatiereController'
      })
      .state('home.settings.nuancesmatieres',{
          url:'/nuancematiere',
          templateUrl:'templates/nuancematiere.html',
          controller:'MatiereNuanceController'
      })
    ;
    $urlRouterProvider.otherwise('/dashboard');

}])
.run(['$state',function($state){
    console.log('ngErp is running...');
    $state.go('home.dashboard');
}])
;
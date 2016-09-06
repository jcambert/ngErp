'use strict';
angular.module('ngErp',['ngMaterial', 'ngMessages','compareTo','ngAnimate','toastr','sailsResource','ngErpModels','ui.router'])
.controller('MainController',['$scope','Settings',function($scope,Settings){
    console.dir(Settings);
    $scope.settings={};
    $scope.settings.showTooltip=Settings.showTooltip;
    
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
    ;
    $urlRouterProvider.otherwise('/dashboard');

}])
.run(['$state',function($state){
    console.log('ngErp is running...');
    $state.go('home.dashboard');
}])
;
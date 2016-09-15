'use strict';
angular.module('ngErp',['ngMaterial', 'ngMessages','compareTo','ngAnimate','toastr','sailsResource','ngErpModels','ui.router','md.data.table'])
.controller('MainController',['$scope','Settings',function($scope,Settings){
    
    $scope.settings={};
    $scope.settings.showTooltip=Settings.showTooltip;
    $scope.menuItems =[
        {
            icon:'dashboard',
            name:'Dasboard',
            sref:'home.dashboard'
        },
        {
            icon:'business_center',
            name:'Client',
            sref:'home.client.list'
        },
        {
            icon:'person',
            name:'Contact',
            sref:'home.contact.list'
        },
        {
            icon:'bubble_chart',
            name:'Article',
            sref:'home.article'
        }
        ,
        {
            icon:'build',
            name:'Settings',
            sref:'home.settings'
        }
    ]
    
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
      .state('home.chiffrage',{
          url:'/chiffrage',
          
          template:'<ui-view></ui-view>',
          //abstract:true,
      })
      .state('home.chiffrage.add',{
          url:'/add',
          controller:'ChiffrageController',
          templateUrl:'templates/chiffrage/chiffrage.add.html'
      })
      
      .state('home.client',{
          url:'/client',
          template:'<ui-view></ui-view>',
          abstract:true,
      })
      .state('home.client.list',{
          url:'',
          templateUrl:'templates/client/client.list.html'
      })
      .state('home.client.add',{
          url:'/add',
          //controller:'ClientAddController',
          /*data:{
              mode:'add'
          },*/
          templateUrl:'templates/client/client.form.html'
      })
       .state('home.client.edit',{
          url:'/edit/:id',
          //controller:'ClientAddController',
          /*data:{
              mode:'edit'
          },*/
          templateUrl:'templates/client/client.form.html'
      })
      
      
      .state('home.contact',{
        url:'/contact',
        template:'<ui-view></ui-view>',
        abstract:true
      })
      
      .state('home.contact.list',{
          url:'',
          templateUrl:'templates/contact/contact.list.html'   
      })
      
      .state('home.contact.add',{
          url:'/add?clientid',
          templateUrl:'templates/contact/contact.form.html',
          /*data:{
              mode:'add'
          }*/
      })
      
      .state('home.contact.edit',{
          url:'/edit/:id',
          templateUrl:'templates/contact/contact.form.html',
          /*data:{
              mode:'edit'
          }*/
      })
      
      .state('home.article',{
          url:'/article',
          //controller:'ArticleController',
          template:'<div>Liste des articles</div>'
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
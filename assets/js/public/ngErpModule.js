'use strict';
angular.module('ngErp',['ngMaterial', 'ngMessages','compareTo','ngAnimate','toastr','sailsResource'])
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
.config(function($mdIconProvider,SettingsProvider) {
    
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    SettingsProvider.showTooltip=false;

})
.run(function(){
    console.log('ngErp is running...');
})
;
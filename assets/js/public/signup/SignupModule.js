angular
.module('ngErpSignup',['ngMaterial', 'ngMessages','compareTo','ngAnimate','toastr','sailsResource'])
.config(function($mdIconProvider,sailsResourceProvider) {
    
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
       
    
   });
   
   
;
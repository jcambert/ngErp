'use strict;'

angular('ngErp')
.directive('formRender',['sailsResource','$compile','$log',function(sailsResource,$compile,$log){
    return {
        restrict:'E',
        replace:true,
        link:function($scope,element,attrs){
            var root = angular.element('form');
            var service = sailsResource('form',{
               byname:{method:'GET',url:'/form/:name',isArray:false} 
            });
            
            service.byname({'name':$scope.resource},
                function(frm){
                    
                },
                function(err){}
            );
        }
    }
}]);
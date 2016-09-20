

var DpController=function ($log,$scope,$state,$stateParams,toastr,sailsResource,$mdDialog){
    var self=this;
    DpController.prototype.$super.apply(self,arguments);
    
    
    var serviceClient=sailsResource(self.resource,{
            lastNumber:{method:'GET', url: '/dp/lastNumber?save'}
    });
     
     
     self.createNewItem = function(){
        serviceClient.lastNumber(function(dp){
            console.dir(dp);
            self.item =dp;
            self.onCreateNewItemSuccess();
        });
        
    };
}


angular.inherits(DpController,FormController);

angular.module('ngErp')
.controller('DpController',DpController);


var ContactController=function ($log,$scope,$state,$stateParams,toastr,sailsResource,$mdDialog){
    var self=this;
    ContactController.prototype.$super.apply(self,arguments);
    self.civilites =['Mr','Mme','Mlle'];
    
    var serviceClient=sailsResource('client',{
            byname:{method:'GET', url: '/client/byname', isArray: true}
    });
     serviceClient.byname(function(clients){
         console.dir(clients);
         self.clients =clients
     });
            
    self.onCreateNewItemSuccess = function(){
        if(angular.isDefined( $stateParams.clientid))
            self.item.client = Number($stateParams.clientid);
        else{
            
        }
    }
    

}


angular.inherits(ContactController,FormController);

angular.module('ngErp')
.controller('ContactController',ContactController);
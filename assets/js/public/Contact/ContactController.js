

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
    
    var frm={
        name:'frm',
        row:[
            {
                label:'Client',
                flex:30,
                if:'vm.addMode()'
                option:{
                    name:'client',
                    model:'vm.item.client.id',
                    required:true,
                    source:'vm.clients',
                    value:'client.id',
                    display:'client.nom'
                },
                errors:[
                    {error:'required',message:'This is required'},
                ]
            },{
                label:'Client',
                flex:30,
                if:'vm.editMode()',
                input:{
                    name:'nom',
                    model:'vm.item.client.nom',
                    disabled:true
                }
            }
        ]
            
        
    }
}


angular.inherits(ContactController,FormController);

angular.module('ngErp')
.controller('ContactController',ContactController);
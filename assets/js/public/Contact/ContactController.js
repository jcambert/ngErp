

var ContactController=function ($log,$scope,$state,$stateParams,toastr,sailsResource,$mdDialog){
    var self=this;
    ContactController.prototype.$super.apply(self,arguments);
    self.civilites =['Mr','Mme','Mlle'];
    
    var serviceClient=sailsResource('client',{
            byname:{method:'GET', url: '/client/byname', isArray: true}
    });
     serviceClient.byname(function(clients){
         //console.dir(clients);
         self.clients =clients
     });
            
    self.onCreateNewItemSuccess = function(){
        if(angular.isDefined( $stateParams.clientid))
            self.item.client = Number($stateParams.clientid);
        else{
            
        }
        
        
    }
    
     self.onLoadItemSuccess = function(item){
        service.byname({'name':self.resource},
            function(frm){
                //console.dir(frm);
                self.frm=frm.ui;
            },
            function(err){
                console.dir(err);
            }
        );
    }
    
    var root = angular.element('form');
    var service = sailsResource('form',{
        byname:{method:'GET',url:'/form/byname/:name',isArray:false} 
    });
    
    this.tinymceOptions= {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };
    
    self.jsonTemplate={
        name:'formly',
        input:{
                label:'Client',
                name:'nom',
                model:'vm.item.client.nom',
                disabled:true
            },
       /* row:[
            {
                
                flex:30,
                if:'vm.addMode()',
                option:{
                    label:'Client',
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
               
                flex:30,
                if:'vm.editMode()',
                input:{
                    label:'Client',
                    name:'nom',
                    model:'vm.item.client.nom',
                    disabled:true
                }
            }
        ]*/
            
        
    }
}


angular.inherits(ContactController,FormController);

angular.module('ngErp')
.controller('ContactController',ContactController);
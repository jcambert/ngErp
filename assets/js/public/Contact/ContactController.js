var GenericController=function ($log,$scope,$state,$stateParams,toastr,sailsResource,$mdDialog) {
    var self=this;
    self.$scope = $scope;
    self.createNew = function($event){};
    
}

var FormController=function ($log,$scope,$state,$stateParams,toastr,sailsResource,$mdDialog){
    var self=this;
    
    FormController.prototype.$super.apply(self,arguments);
    $log.log($stateParams);
    
    
    self.resource={}
    
    self.loadOrEdit = function(){
        if(self.addMode())self.createNewItem();  
        if(self.editMode())self.loadItem($stateParams.id)
    }
    
    self.editMode = function(){
       return angular.isDefined($stateParams.id);// $state.current.data.mode=='edit';
    };
    self.addMode = function(){
       return !angular.isDefined($stateParams.id);//return $state.current.data.mode=='add';
    };
    
    self.onSaveItemSuccess = function(item){
        self.item = item;
        toastr.success('Client ' + item.nom +' was created');
        var confirm = $mdDialog.confirm()
            .title('Would you like to modify '+ item.nom +'?')
            //.textContent('All of the banks have agreed to forgive you your debts.')
            //.ariaLabel('Lucky day')
            .targetEvent($event)
            .ok('Ok')
            .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                $state.go('home.'+self.resource+'.edit',{id:item.id});
            }, function() {
                $state.go('home.'+self.resource+'.list');
            });
        
    }
    
    self.onSaveItemFailure = function(err){
        
    }
    
    self.saveItem = function($event){
        self.item.$save(self.onSaveItemFailure,self.onSaveItemFailure);
    };
    
    self.cancel = function(){
        $state.go('home.'+self.resource+'.list');
    };
    
    self.onCreateNewItemSuccess = function(){
        
    }
    
    self.createNewItem = function(){
        var Item = sailsResource(self.resource);
        self.item = new Item();
        self.onCreateNewItemSuccess();
    };
    
    self.onLoadItemSuccess = function(item){
        
    }
    
    self.onLoadItemFailure = function(err){
        toastr.error(self.resource+ ' with id '+$stateParams.clientid+' didn\'t exist');
        $state.go('home.'+self.resource+'.list');
    }
    
    self.loadItem = function(id){
        self.item = sailsResource(self.resource).get({id:id},
            self.onLoadItemSuccess,
            self.onLoadItemFailure
        );
    }
}

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

angular.inherits(FormController,GenericController);
angular.inherits(ContactController,FormController);
//FormController.extend(GenericController);
//ContactController.extend(FormController);

angular.module('ngErp')
//.controller('GenericController',GenericController)
//.controller('FormController',FormController)
.controller('ContactController',ContactController)
/*
.controller('ContactController',['$scope','$state','$stateParams','toastr','sailsResource','$mdDialog',function($scope,$state,$stateParams,toastr,sailsResource,$mdDialog){
    var self = $scope;
    self.civilites =['Mr','Mme','Mlle'];
    console.dir($stateParams.clientid);
    
    
    self.editMode = function(){
       return angular.isDefined($stateParams.id);// $state.current.data.mode=='edit';
    };
    self.addMode = function(){
       return !angular.isDefined($stateParams.id);//return $state.current.data.mode=='add';
    };
    
    self.save = function($event){
        self.contact.$save(function(contact){
            self.contact=contact;
            toastr.success('Client ' + contact.nom +' was created');
            var confirm = $mdDialog.confirm()
                .title('Would you like to modify '+ contact.nom +'?')
                //.textContent('All of the banks have agreed to forgive you your debts.')
                //.ariaLabel('Lucky day')
                .targetEvent($event)
                .ok('Ok')
                .cancel('Cancel');

                $mdDialog.show(confirm).then(function() {
                    $state.go('home.contact.edit',{id:contact.id});
                }, function() {
                    $state.go('home.contact.list');
                });
        });
    };
    
     self.cancel = function(){
        $state.go('home.contact.list');
    };
    
    self.createNew = function(){
        var Contact = sailsResource('contact');
        self.contact = new Contact();
        //if(angular.isDefined( $stateParams.clientid))
            self.contact.client = Number($stateParams.clientid);
            console.dir(self.contact);
    };
    
    self.load = function(id){
        self.contact = sailsResource('contact').get({id:id},
            function(){},
            function(){
                toastr.error('contact with id '+id +' didn\'t exist');
                $state.go('home.contact.list');
            }
        );
    }
    
    
    
}])*/
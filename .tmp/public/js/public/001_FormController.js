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
angular.inherits(FormController,GenericController);
angular.module('ngErp')


.controller('ClientController',['$scope','$state','$stateParams','sailsResource','$mdDialog','toastr',function($scope,$state,$stateParams,sailsResource,$mdDialog,toastr){
    var self=$scope;
    
    self.editMode = function(){
       return angular.isDefined($stateParams.id);// $state.current.data.mode=='edit';
    };
    self.addMode = function(){
       return !angular.isDefined($stateParams.id);//return $state.current.data.mode=='add';
    };
    
    self.save = function($event){
        self.client.$save(function(client){
            self.client=client;
            toastr.success('Client ' + client.nom +' was created');
            var confirm = $mdDialog.confirm()
                .title('Would you like to modify '+ client.nom +'?')
                //.textContent('All of the banks have agreed to forgive you your debts.')
                //.ariaLabel('Lucky day')
                .targetEvent($event)
                .ok('Ok')
                .cancel('Cancel');

                $mdDialog.show(confirm).then(function() {
                    $state.go('home.client.edit',{id:client.id});
                }, function() {
                    $state.go('home.client.list');
                });
        });
    }
    
    self.cancel = function(){
        $state.go('home.client.list');
    }
    
    self.createNew = function(){
        var Client = sailsResource('client');
        self.client = new Client();
    }
    
    self.load = function(id){
        self.client = sailsResource('client').get({id:id},
            function(){},
            function(){
                toastr.error('client with id '+id +' didn\'t exist');
                $state.go('home.client.list');
            }
        );
    }
    
    if(self.addMode())self.createNew();  
    if(self.editMode())self.load($stateParams.id)
}])
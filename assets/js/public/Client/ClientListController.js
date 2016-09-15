angular.module('ngErp')


.controller('ClientListController',['$scope','$state','sailsResource','toastr','$mdDialog',function($scope,$state,sailsResource,toastr,$mdDialog){
    var self=$scope;
    
    self.refresh = function(){
        self.clients = sailsResource('client').query();
    };
    
    function deleteClient(client){
         var item=sailsResource('client').get({id:client.id});
        item.$delete(
            function(){
                self.refresh();
                toastr.success('Le client '+client.nom + ' a été supprimé')
            },
            function(err){
               toastr.error(err); 
            });
    }
    
    self.delete = function(ev,client){
        
        var confirm = $mdDialog.confirm()
        .title('Would you like to delete '+ client.nom +'?')
        //.textContent('All of the banks have agreed to forgive you your debts.')
        //.ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Ok')
        .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            deleteClient(client);
        }, function() {
        
        });
    }
    
    self.edit = function(ev,client){
        $state.go('home.client.edit',{id:client.id});
    }
    
    self.refresh();
}])
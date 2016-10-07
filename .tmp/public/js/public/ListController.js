angular.module('ngErp')
.controller('ListController',['$scope','$state','sailsResource','toastr','$mdDialog',function($scope,$state,sailsResource,toastr,$mdDialog){
    var self=$scope;
    //self.resource='contact';
    self.refresh = function(){
        console.dir(self.resource);
        self.items = sailsResource(self.resource).query();
    };
    
    function deleteItem(item){
        var item_=sailsResource(self.resource).get({id:item.id});
        item_.$delete(
            function(){
                self.refresh();
                toastr.success(item.id + ' a été supprimé')
            },
            function(err){
               toastr.error(err); 
            });
    }
    
    self.delete = function(ev,item){
        
        var confirm = $mdDialog.confirm()
        .title('Would you like to delete '+self.resource+' : '+ item.id +'?')
        //.textContent('All of the banks have agreed to forgive you your debts.')
        //.ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Ok')
        .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            deleteItem(item);
        }, function() {
        
        });
    }
    
    
    //self.refresh();
}]);
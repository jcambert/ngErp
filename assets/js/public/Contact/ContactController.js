angular.module('ngErp')
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
            self.contact.client = $stateParams.clientid;
    };
    
    self.load = function(id){
        self.client = sailsResource('contact').get({id:id},
            function(){},
            function(){
                toastr.error('contact with id '+id +' didn\'t exist');
                $state.go('home.contact.list');
            }
        );
    }
    
    if(self.addMode())self.createNew();  
    if(self.editMode())self.load($stateParams.id)
    
}])
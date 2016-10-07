angular.module('ngErp')

.controller('ChiffrageController',[ '$rootScope','$scope','sailsResource',function($rootScope,$scope,sailsResource){
    var self=$scope;
    
    self.clients = sailsResource('client').query();
    
    self.dp={
        numero:4567,
        version:0,
        
    }
}])
.controller('ChiffrageListController',['$scope',function($scope){
    var self=$scope;
    self.dps = [
        {
            id:1,
            numero:1234,
            version:0,
            solde:false     
        },
        {
            id:2,
            numero:4567,
            version:1,
            solde:false
        }
    ];
}])
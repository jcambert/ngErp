angular.module('ngErp')
.directive('itemDeleteEditButtons',[function(){
    return{
        restrict:'E',
        replace:true,
        template:'<p><md-button class="md-icon-button" ui-sref="home.contact.edit({id:item.id})"><md-icon>edit</md-icon><md-tooltip>Edit {{client.nom}}</md-tooltip></md-button>'+
                 '<md-button class="md-icon-button" ng-click="delete($event,item)"><md-icon>delete</md-icon><md-tooltip>Delete {{client.nom}}</md-tooltip></md-button></p>'
    }
}])
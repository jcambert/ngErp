'use strict;'
angular.module('ngErp')
.directive('saveCancelToolbar',function(){
    return{
        restrict:'E',
        replace:true,
        template:'' +
                '<md-toolbar class="md-table-toolbar md-default">'+
                   '<div class="md-toolbar-tools">'+
                        '<md-button class="md-fab md-primary md-mini" aria-label="Save {{vm.resource}}" ng-click="vm.saveItem($event)" ng-disabled="frm.$invalid">'+
                            '<md-icon>save</md-icon>'+ 
                            '<md-tooltip md-direction="bottom">Save {{vm.resource}}<md-tooltip>'+
                        '</md-button>'+
                        '<md-button class="md-fab md-mini" aria-label="Add {{vm.resource}}" ng-click="vm.cancel()">'+
                            '<md-icon>cancel</md-icon>'+ 
                            '<md-tooltip md-direction="bottom">Cancel saving {{vm.resource}}<md-tooltip>'+
                        '</md-button>'+
                    '</div>'+
                '</md-toolbar>'
    }
})
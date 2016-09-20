angular.module('ngErp')
.directive('listToolbar',[function(){
    return{
        restrict:'E',
        replace:true,
        template:'<md-toolbar class="md-table-toolbar md-default" ng-hide="options.rowSelection && selected.length">'+
                '<div class="md-toolbar-tools">'+
                    '<span></span>'+
                    '<div flex></div>'+
                    '<md-button class="md-icon-button" aria-label="Add Client" ui-sref="home.{{resource}}.add">'+
                        '<md-icon>add</md-icon>'+ 
                        '<md-tooltip md-direction="bottom"> Add a {{resource}}<md-tooltip>'+
                    '</md-button>'+
                    '<md-button class="md-icon-button" ng-click="refresh()">'+
                        '<md-icon>refresh</md-icon>'+
                        '<md-tooltip md-direction="bottom">Refresh<md-tooltip>'+
                   '</md-button>'+
                '</div>'+
                '</md-toolbar>'
    }
}])
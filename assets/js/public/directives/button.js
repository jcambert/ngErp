angular.module('ngErp')
.directive('ngErpButton',function(){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'templates/button.html',
        /*scope:{
            icon:'@',
            tooltipDirection:'@',
            tooltip:'@',
            showTooltip:'='
        }    */ 
    };
});


var DpController=function ($log,$scope,$state,$stateParams,toastr,sailsResource,$mdDialog){
    var self=this;
    DpController.prototype.$super.apply(self,arguments);
    
    this.tinymceModel = 'Initial content';

   
    this.tinymceOptions = {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };
   
}


angular.inherits(DpController,FormController);

angular.module('ngErp')
.controller('DpController',DpController);